import React from 'react'
import { Link } from 'react-router-dom'
import Shop from '../components/Shop'
import EmailSubscription from '../utils/EmailSubscription'

const ShopPage:React.FC =()=> {
  return (
    

    <div className=' flex flex-1 flex-col w-full space-y-8 items-center justify-center'>

{/* main banner  */}
<div className=' w-full flex flex-1 flex-col coverIMage  object-cover p-5 text-white space-y-3'  >

 <h1 className='text-white'>Best Room Decor Items</h1>

 <h1 className='  text-2xl font-bold md:w-[40%] md:text-4xl'>Our goods have the best quality and materials in the world</h1>



<div className=' bg-white py-3 px-4 text-black w-48 items-center justify-center flex flex-col rounded-sm hover:bg-black hover:text-white font-bold hover:transition-all hover:duration-150'>
    <Link  to={'/shop'}>Shop Now</Link>
</div>
</div>


{/* shop Content  */}


<div className=' flex flex-1 w-full'>

    <Shop/>
</div>


<div className='w-[90%]  flex flex-1 flex-col items-center justify-center'>

<div>
<EmailSubscription/>
</div>
   
</div>
    </div>
  )
}

export default ShopPage