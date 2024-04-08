import React, { useEffect, useState } from 'react'
import { cartLogo, userLogo, webLogo } from '../utils/Constent'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';


 const Header:React.FC = ()=>{

  const [openMenu,setOpenMenu]=useState<boolean>(false)

  const location = useLocation();

  const activeScreen:string =location.pathname
  useEffect(() => {
    
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
   
        setOpenMenu(false);
      }
    };

    
    document.body.addEventListener('click', handleClickOutside);

  
  }, []);
  


  return (
    <div className=' flex flex-row justify-between items-center p-7 relative'>
       
{/* logo  */}

     <div>
      <img src={webLogo}   />
     </div>

    

{/* web Menu  */}

   <div className='hidden md:flex flex-1 ' >
   <div className='flex flex-1 flex-row items-center justify-center'>
    <div className='flex justify-between space-x-4  text-xl'>
    <Link to={"/"}>Home</Link>
    <Link to={"/shop"}>Shop</Link>
    <Link to={"/"}>Blog</Link>
    <Link to={"/"}>About</Link>
    <Link to={"/"}>Contact</Link>
    <Link to={"/"}>Team</Link>
    </div>
     </div>

<div className='flex flex-row items-center justify-between space-x-5' >
  


  <div >

    <img src={cartLogo}/>
    
  </div>

  <div>
    <img src={userLogo} />
  </div>

</div>
   </div>
    


{/* Mobile Menu  */}


<div  className='md:hidden flex flex-col'>
        <div className='cursor-pointer' onClick={() => setOpenMenu(true)}>
          <CiMenuFries size={28} color='black' />
        </div>

        <div className={`${openMenu ? 'flex' : 'hidden'} absolute w-full bg-white  inset-0 flex-1 flex-col `}>
        
        {/* top  */}
         <div className=' flex flex-row flex-1 justify-between items-center px-4 '>
         <img src={webLogo} alt=""  className=' h-20 w-20'/>
         <div onClick={()=>setOpenMenu(false)}>
         <RxCross2  size={28} color='black'/>
         </div>
         </div>


         {/* content  */}


         <div className=' flex flex-col  text-lg bg-white flex-1 items-center justify-center py-3 space-y-2'>
          <Link className={`${activeScreen==="/" ? " text-purple-900 font-bold" : "text-black"}`} to={'/'}>Home</Link>
          <Link className={`${activeScreen==="/shop" ? " text-purple-900 font-bold" : "text-black"}`} to={'/shop'}>Shop</Link>

          <Link  className={`${activeScreen==="/blog" ? " text-purple-900 font-bold" : "text-black"}`}   to={'/blog'}>Blog</Link>
          <Link className={`${activeScreen==="/about" ? " text-purple-900 font-bold" : "text-black"}`}  to={'/about'}>About Us</Link>
          <Link  className={`${activeScreen==="/team" ? " text-purple-900 font-bold" : "text-black"}`}  to={'/team'}>Team</Link>

          <Link className={`${activeScreen==="/login" ? " text-purple-900 font-bold" : "text-black"}`}   to={'/login'}>Login</Link>

           <Link className={`${activeScreen==="/cart" ? " text-purple-900 font-bold" : "text-black"}`}  to={'/cart'}>View Cart</Link>

         </div>
        </div>
      </div>

   

    </div>
  )
 }
export default Header