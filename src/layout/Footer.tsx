import React from 'react'
import { webLogo } from '../utils/Constent'

const Footer:React.FC=()=> {
  return (


    <div className=' grid md:grid-cols-5 gap-5 grid-cols-1 bg-black text-white  px-5 py-6'>

<div className=' flex flex-col md:col-span-3 space-y-3' >

    <div>
        <img src={webLogo} alt="" />
    </div>

<h1>Furnit.
Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.</h1>

</div>


<div className=' flex flex-col space-y-3'>

<h1 className=' font-bold text-xl'>Customer</h1>
<h1>Order Status</h1>

<h1>Collections</h1>

<h1>Our Story</h1>

<h1>Affiliates</h1>

<h1>Security</h1>
</div>


<div className=' flex flex-col'>
<h1 className=' font-bold text-xl'>Information</h1>
<h1>Customer Service</h1>

<h1>Careers</h1>

<h1>FAQ</h1>
</div>

    </div>
  )
}

export default Footer