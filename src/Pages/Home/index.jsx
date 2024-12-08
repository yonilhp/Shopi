import { useContext } from 'react'
import Layout from '../../Components/Layout'
import '../../App.css'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import {ShoppingCartContext} from '../../Context'

function Home() {
  
  const context=useContext(ShoppingCartContext)

  const renderView=()=>{
      if(context.filteredItems?.length>0){
        return(
          context.filteredItems?.map(item=>(
            <Card key={item.id} data={item}/>
          ))
        )
      }else{
        return(
          <div>We dont have anything</div>
        )
      }

  }
 

  return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 '>
          <h1 className='font-medium text-xl'>
              Exclusive Products
          </h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="rounded-lg border border-black p-3 w-80 m-3 focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61] focus:outline-none"
          onChange={(event)=>{
            console.log('Input value:', event.target.value);
            context.setSearchByTitle(event.target.value)}}
        />

        <div className='grid gap-5 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail/>
      </Layout>

  )
}

export default Home
