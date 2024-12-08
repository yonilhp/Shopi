import "../../App.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { Link } from 'react-router-dom'

import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index= currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index==='last') index=context.order?.length-1
  return (
    <Layout>
      {/* justify-center para qiue el texto no se pegue al lado izquierdo */}
      <div className='flex items-center justify-center relative w-80 mb-5'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon 
                      className='size-6 text-black cursor-pointer rounded-full p-1
                      bg-gray-300 hover:bg-[#FF6F61] active:bg-[#FF6F61]'
            />
          </Link>

          <h1>
            My Order
          </h1>
        </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={
              Array.isArray(product.images) ? product.images[0] : product.images
            }
            price={product.price}
            handleDelete={() => {}} // Función vacía
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
