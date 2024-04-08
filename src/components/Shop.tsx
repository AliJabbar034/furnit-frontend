import React, { useEffect, useState } from 'react'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Select, { SingleValue } from 'react-select'
import Product from './Product';
import { useForm,SubmitHandler } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllProducts } from '../store/product/productApi';
import { useDispatch } from 'react-redux';
import { poductActions } from '../store/product/productReducer';

type option ={
    value:number,
    label:string
   }

   type FormValue={
    title:string
   }

   const options:option[] = [
    { value: 1, label: 'Price high to low' },
    { value: -1, label: 'Price Low to high' },
   ]
  interface queryObj {
    title?:string,
    sort?:number,
    color?:string
  }

 const Shop:React.FC=()=> {
   
   const {register,handleSubmit}= useForm<FormValue>()

   const queryOb:queryObj = {}

   const dispatch=useDispatch()




  const {isLoading, isFetched, data:products} =useQuery({
    queryKey:['products'],
    queryFn:()=>getAllProducts(),
    
   })

 const {mutate}=  useMutation({
    mutationFn : getAllProducts,
    onSuccess(data){
         dispatch(poductActions.getAllProduct(data.products))
    }
   })

const onSubmit:SubmitHandler<FormValue> =(data)=>{
 queryOb.title=data.title

 
 
    
mutate(queryOb)


    

}


useEffect(()=>{
    if(isFetched && products){
     dispatch(poductActions.getAllProduct(products.products))
    }
},[isFetched,products,dispatch])

  return (
  <div className=' flex flex-1 flex-col'>

<div className=' grid md:grid-cols-4 gap-3 w-full px-3 py-3'>


{/* filter content  */}

<div className=' hidden col-span-1 md:flex flex-col space-y-4'>


<h1 className=' text-black text-lg font-semibold'>Filter  by Price</h1>

<div className=' flex flex-row space-x-3 items-center'>

    <input type="text" className=' border border-black w-32 focus:outline-none px-1 py-2 rounded-sm' />
    <h1>-</h1>
    <input type="text" className=' border border-black w-32 focus:outline-none px-1 py-2 rounded-sm' />


</div>


<h1 className=' text-black text-lg font-semibold'>Filter By Color</h1>

<div className=' flex flex-wrap space-x-4'>

    <div className=' bg-red-800 h-10 w-10 rounded-full cursor-pointer'></div>
    <div className=' bg-green-800 h-10 w-10 rounded-full cursor-pointer'></div>
    <div className=' bg-purple-800 h-10 w-10 rounded-full cursor-pointer'></div>
    <div className='  bg-blue-800 h-10 w-10 rounded-full cursor-pointer'></div>
    <div className='  bg-gray-800 h-10 w-10 rounded-full cursor-pointer'></div>
        
</div>

{/* Product Categories */}



<h1 className=' text-black text-lg font-semibold' >Product Categories</h1>

<div className=' flex flex-col space-y-4'>

    <h1>Chair</h1>
    <h1>Table</h1>
    <h1>Sofa</h1>
    <h1>Lamp</h1>
</div>




</div>


{/* shop Data  */}


<div className=' col-span-3 w-full space-y-6'>


    <div className=' flex flex-row flex-1 justify-between items-center'> 

        {/* search  */}

        <form className=' flex flex-row' onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  id='title'  {...register("title")}  placeholder='Search here' className=' placeholder:text-gray-600 focus:outline-none border border-black px-2 py-2' />
            <input type="submit" title='Search' className=' bg-black text-white font-bold px-3 cursor-pointer' />
        </form>


        <div className=' pr-3 flex flex-row space-x-4 items-center'>
            <h1>Sort By</h1>

            <div>  <Select options={options}  onChange={(e:SingleValue<option>)=>  {
                queryOb.sort=e?.value;
                 mutate(queryOb)
            }
            }/></div>
        </div>
    </div>

    <div className=' py-5'>
        {
            isLoading ? <div className=' flex flex-1 flex-col items-center justify-center'><h1>loading...........</h1></div> :
            <Product col={3}/>
        }
    </div>
</div>

   </div>


{/* pagination  */}


<div className=' flex flex-1 flex-col items-center justify-center'>
<Stack spacing={2}>
     
      <Pagination count={4} color="secondary" />
   
    </Stack>
</div>



  </div>


  )

  
}


export default Shop
