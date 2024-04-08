import React from 'react';
import { emailSubImage } from './Constent';

const EmailSubscription: React.FC = () => {
  return (
    <div className='bg-gray-900 flex flex-col md:flex-row   w-full p-4  justify-between rounded-sm'>


<div className='  flex flex-col flex-1  justify-center  space-y-3'>
<h1 className=' text-2xl md:text-3xl font-semibold text-white'>Subscribe now and get 10% off all items</h1>

<h1 className=' text-white text-wrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</h1>


<form action="" className='grid grid-cols-4 md:w-1/2'>

    <input type="text" placeholder='Enter email here' className=' col-span-3 py-3 px-2 focus:outline-none placeholder:text-gray-700'  />
    <input type="submit"  title="Submit" className=' bg-gray-950 cursor-pointer px-2 py-1 text-white md:font-semibold md:text-lg'/>
</form>



</div>

<div className=''>
    <img src={emailSubImage} alt=""  className=' h-60'/>
</div>

    </div>
  );
};

export default EmailSubscription;
