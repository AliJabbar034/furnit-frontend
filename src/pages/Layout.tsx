import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";



const Layout:React.FC = ()=>{
return (
    <div className=" flex flex-1 flex-col h-screen justify-between  space-y-8">
       
<div className="">
<div className="">
    <Header/>
</div>

<div>
    <Outlet/>
</div>
</div>

<div className=" w-[100%]">
  <Footer/>
</div>


    </div>
)
}


export default Layout;
