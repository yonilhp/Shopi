import  {useContext} from "react"
import  {ShoppingCartContext}  from "../../Context"

import { CheckIcon,PlusIcon } from '@heroicons/react/24/solid'


const Card =(data)=>{
    const context=useContext(ShoppingCartContext)

    const showProduct =(productDetail) =>{
        if (context.isCheckoutSideMenuOpen) {
            context.closeCheckoutSideMenu();
        } else if (context.isProductDetailOpen) {
            context.closeProductDetail();
        } else {
            context.openProductDetail();
            context.setProductToShow(productDetail);
        }
    }

    const addProductsToCart =(event, productData)=>{
        event.stopPropagation();
        context.setCount(context.count +1);
        context.setCartProducts([...context.cartProducts,productData]);
        context.openCheckoutSideMenu();
   
    }

    const parseImageUrl = (image) => {
        try {
          const parsed = JSON.parse(image);
          return Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : image;
        } catch {
          return image;
        }
    };

    const renderIcon = (id)=>{
        const isInCart= context.cartProducts.filter(product=>product.id===id).length>0
        if(isInCart){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-[#8BC34A] w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon  className='size-6 text-black'/>
                </div>
            )
        }else{
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-[#FF6F61] w-6 h-6 rounded-full m-2 p-1"
                        onClick={(event)=>addProductsToCart(event, data.data)}>
                        <PlusIcon  className='size-6 text-black'/>
                </div>
            )
        }
        
    }

    return (
        <div 
        className="bg-blue-300 cursor-pointer w-60 h-66 rounded-lg border-2 border-[#FF6F61]"
        onClick={()=>showProduct(data.data)}>
            <figure className="relative mb-3 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-[#FF6F61] rounded-lg text-black text-xs m-2 px-2 py-0.5">{data.data.category.name}</span>
                {/* Se usa w-full h-full object-cover para que ocupe el ancho y altura total del card y que la imagen no se dañe */}
                <img className="w-full h-full object-cover rounded-lg " src={parseImageUrl(data.data.images[0])} alt={data.data.title}/>
                {
                    renderIcon(data.data.id)
                }
            </figure>
            <p className="flex justify-between px-2 pb-2">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card