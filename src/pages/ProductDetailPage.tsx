import React from 'react'
import { midSection } from '../utils/Constent'
import { FaRegHeart } from "react-icons/fa6";
import Rating from '@mui/material/Rating';
import EmailSubscription from '../utils/EmailSubscription';



const ProductDetailPage:React.FC=()=> {
  return (
    <div className=' flex flex-1 flex-col items-center justify-center space-y-10'>



{/* top container  */}

<div className=' grid md:grid-cols-2 grid-cols-1  gap-8 w-[80%]'>

<div>
<img src={midSection} alt="" />

</div>

<div className=' flex flex-col space-y-6 '>
    <h1 className=' text-2xl  md:text-4xl font-semibold'>Complete set of sofa, pillows and bed sheets</h1>


{/* review s  */}


<div className=' flex flex-row space-x-5 items-center'>

      <Rating name="read-only" value={4} readOnly />
      <h1 className=' text-gray-500'>Total reviews (1)</h1>
</div>
{/* price  */}
    <h1 className=' font-semibold text-lg'>$ 75.00</h1>

    <h1 className=' text-gray-500'>Categories</h1>


{/* description  */}

 <h1 className=' text-gray-500'>In order to sit comfortably for long periods, people need freedom of movement. The Form rocking chair has a molded plastic shell with a wide, curved seat, which gives plenty of opportunity for changing one’s sitting position.

</h1>

    <div className=' flex-row flex-1 flex  items-center space-x-5'>



<div className=' flex flex-row space-x-2 items-center'>

<div className=' border flex border-black h-8 w-8 rounded-full items-center justify-center cursor-pointer hover:bg-gray-400'>+</div>
<h1>3</h1>
<div className=' border flex border-black h-8 w-8 rounded-full items-center justify-center cursor-pointer hover:bg-gray-400'>-</div>

</div>


<div className=' bg-black text-white hover:bg-gray-700 cursor-pointer py-2 px-2 rounded-sm'>
    <h1>Add to Cart</h1>
</div>


<div className=' border border-black  hover:bg-gray-400 cursor-pointer p-2 rounded-sm'>
<FaRegHeart size={22} color='black' />
</div>





    </div>
</div>

</div>






<div className=' grid md:grid-cols-2 w-[80%] gap-5 '>



<div className=' space-y-8'>
   
   <div className=' flex-row space-x-3 flex '>
    <h1 className=' font-semibold text-2xl  border-b-black cursor-pointer border-b-4'>Descrption</h1>
    <h1 className=' font-semibold  cursor-pointer text-2xl'>Reviews</h1>
   </div>


   <div className=' flex flex-col flex-1'>
<h1 className=' text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,

but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
   </div>
</div>



</div>



<div className='w-[90%] flex flex-1 items-center justify-center'>
    <EmailSubscription/>
</div>







    </div>
  )
}

export default ProductDetailPage