import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { ShoppingCartContext } from '../../Context'

const ProductDetail=()=>{

    const context=useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ?'flex':'hidden'} product-detail  flex-col fixed right-0 bg-blue-300 border-2 border-[#FF6F61] rounded-lg `}>
            <div className="flex justify-between items-center p-5">
                <h2 className="font-medium text-xl">
                    Detail
                </h2>
                <div>
                    <XMarkIcon 
                    className='size-6 text-black cursor-pointer rounded-full p-1
                                  bg-gray-300 hover:bg-[#FF6F61] active:bg-[#FF6F61]'
                    onClick={()=>context.closeProductDetail()}/>
                </div>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg " src={context.productToShow.images} alt={context.productToShow.title}/>
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>

        </aside>
    )
}
export default ProductDetail