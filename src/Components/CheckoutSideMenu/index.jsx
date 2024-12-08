import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

const CheckoutSideMenu=()=>{

    const context=useContext(ShoppingCartContext)
    const handleDelete=(id)=>{
        const filteredProducts=context.cartProducts.filter(product=>product.id !=id)
        context.setCartProducts(filteredProducts)
    }

const handleChekout = () =>{
    const orderToAdd = {
        date: '18.11.2024',
        products: context.cartProducts,
        totalProducts:context.cartProducts.length,
        totalPrice:totalPrice(context.cartProducts)
    }

    context.setOrder ([...context.order,orderToAdd])
    //Limpiar el orden del chekout
    context.setCartProducts([])
    context.setSearchByTitle(null)
}

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ?'flex':'hidden'} chekout-side-menu  flex-col fixed right-0 bg-blue-300 border-2 border-[#FF6F61] rounded-lg `}>
            <div className="flex justify-between items-center p-5">
                <h2 className="font-medium text-xl">
                    My Order
                </h2>
                <div>
                    <XMarkIcon 
                    className='size-6 text-black cursor-pointer rounded-full p-1
                                  bg-gray-300 hover:bg-[#FF6F61] active:bg-[#FF6F61]'
                    onClick={()=>context.closeCheckoutSideMenu()}/>
                </div>
            </div>

            <div className='px-5 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product=>(
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={Array.isArray(product.images) ? product.images[0] : product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>

            <div className='px-6'>
                {/* Centrar elementos verticalmente con items-center */}
                <p className='flex justify-between items-center  mt-2 mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span> {/* Calcula y muestra el total */}
                </p>
                {/* Línea separadora */}
                <div className='w-full border-t border-black my-2'></div> {/* Línea negra completa */}
                <Link to="/my-orders/last">
                    <button className='bg-[#FF6F61]  hover:bg-[#8BC34A] active:bg-[#8BC34A] py-3 text-white w-full rounded-lg mb-4' onClick={()=>handleChekout()}>Chekout</button>
                </Link>
            </div>
            
        </aside>
    )
}
export default CheckoutSideMenu
