import PropTypes from "prop-types";
import { createContext, useState, useEffect, useCallback } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    // Shopping cart: Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail: Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout side menu: Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail: Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping cart: Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping cart order
    const [order, setOrder] = useState([]);

    // Fetch products
    const [items, setItems] = useState([]);

    // Filtered products
    const [filteredItems, setFilteredItems] = useState([]);

    // Search by title and category
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Fetch initial products
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((data) => setItems(data)); // Only keep the first 20 items
    }, []);

    // Filter products
    const filteredItemsByTitle = (items, searchByTitle) =>
        items.filter(
            (item) =>
                typeof item.title === "string" &&
                item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );

    const filteredItemsByCategory = (items, searchByCategory) =>
        items.filter(
            (item) =>
                typeof item.category.name === "string" &&
                item.category.name
                    .toLowerCase()
                    .includes(searchByCategory.toLowerCase())
        );

    const filterBy = useCallback((searchType, items, searchByTitle, searchByCategory) => {
        switch (searchType) {
            case "BY_TITLE_AND_CATEGORY":
                return filteredItemsByCategory(items, searchByCategory).filter(
                    (item) =>
                        typeof item.title === "string" &&
                        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
                );
            case "BY_TITLE":
                return filteredItemsByTitle(items, searchByTitle);
            case "BY_CATEGORY":
                return filteredItemsByCategory(items, searchByCategory);
            default:
                return items;
        }
    }, []);

    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory));
        } else if (searchByTitle) {
            setFilteredItems(filterBy("BY_TITLE", items, searchByTitle));
        } else if (searchByCategory) {
            setFilteredItems(filterBy("BY_CATEGORY", items, null, searchByCategory));
        } else {
            setFilteredItems(items);
        }
    }, [items, searchByTitle, searchByCategory, filterBy]);

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ShoppingCartContext };

export default ShoppingCartProvider;
