


import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

interface propdata {
    col :number
}

const Product:React.FC<propdata>=(props)=> {

    const {product}=useSelector((state:RootState)=>state.product)

   
    
  return (
    <div>
        {
            product.length === 0 ?
            <div>No Product Found</div>:

            <div className={`grid md:grid-cols-${props.col} grid-cols-1 gap-4`}>
                {
                 product.map((item)=>(
                    <div className=' flex flex-col space-y-4 relative cursor-pointer' key={item._id}>
                         <img src={`http://localhost:5000/${item.images[0]}`} alt=""  className=' rounded-sm hover:cursor-pointer hover:opacity-50'/>
                         <div className=' flex flex-row justify-between px-2'>
                            <h1 className=' font-semibold'>{item.title}</h1>
                            <h1>${item.price}</h1>
                         </div>

                         {/* <div className=' absolute items-center justify-center right-4'>
                            <h1 className=' text-white'>shop</h1>
                         </div> */}
                    </div>
                 ))
                }
            </div>
        }
    </div>
  )
}

export default Product