import React, { useEffect } from 'react'
import { allTime, b1, b2, b3, b4, b5, cover1, cover2, coverImage, fast, midSection, returnSafe, safeDelivery } from '../utils/Constent'
import { Link } from 'react-router-dom'
import LatestBlog from './LatestBlog'
import EmailSubscription from '../utils/EmailSubscription'
import { useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../store/product/productApi'
import { poductActions } from '../store/product/productReducer'
import Product from '../components/Product'

const HomePage: React.FC = () => {

  const dispatch = useDispatch()

  const { isFetched, data } = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts()
  })

  useEffect(() => {
    if (isFetched && data) {
      dispatch(poductActions.getAllProduct(data.products))

    }
  }, [isFetched, data])



  return <div className=' space-y-7 '>

    {/* cover content  */}
    <div className=' bg-pink-100 py-2 px-12 h-screen grid md:grid-cols-2 grid-cols-1 gap-3 items-center'>

      <div className=' space-y-8'>
        <h1 className=' font-semibold text-lg'>Interior Needs</h1>
        <h1 className=' font-bold md:text-4xl  text-2xl'>Various new collections of furniture to decorate the corner of your house.</h1>

        <div >

          <Link className=' bg-black text-white py-4 px-5 font-semibold hover:transition-all hover:duration-150 hover:bg-gray-700 flex w-56 cursor-pointer items-center justify-center rounded-md' to={'/shop'}>Shop Now </Link>
        </div>

      </div>

      <div className=' flex items-center justify-center flex-col'>

        <img src={coverImage} />
      </div>
    </div>


    {/* brand Banner  */}


    <div className=' bg-black text-white py-7 items-center justify-center flex-1 flex-col space-y-4' >

      <h1 className=' text-lg text-center'>Various brands have used our products</h1>
      <div className=' flex md:flex-row  flex-col items-center justify-center space-x-7'>

        <img src={b1} />
        <img src={b2} />
        <img src={b3} />
        <img src={b4} />
        <img src={b5} />

      </div>
    </div>






    <div className='flex flex-1  flex-col  space-y-8 items-center justify-center'>
      {/* demo cover  */}

      <div className='w-[90%]  grid md:grid-cols-2 grid-cols-1 gap-3'>


        {/* col 1 */}
        <div className=' bg-gray-800  py-4 text-white space-y-4 flex flex-row  space-x-3 items-center justify-between px-7 '>

          <div className=' space-y-3'>
            <h1>Living Room</h1>
            <h1 className=' text-xl md:text-4xl font-bold'>The best foam padded chair</h1>

            <div >
              <Link className=' bg-transparent border-white border w-32 items-center justify-center py-2 flex hover:bg-white hover:text-black rounded-sm' to={'/shop'}>Shop Now</Link>
            </div>


          </div>

          <div>

            <img src={cover1} className=' w-28' />
          </div>
        </div>


        {/* col 2  */}
        <div className=' bg-gray-800 py-4 text-white space-y-4 flex flex-row  space-x-3 items-center justify-between px-7 '>

          <div className=' space-y-3'>
            <h1>Living Room</h1>
            <h1 className='text-xl md:text-4xl font-bold'>Latest model chandelier</h1>

            <div>
              <Link className=' bg-transparent border-white border w-32 items-center justify-center py-2 flex hover:bg-white hover:text-black rounded-sm' to={'/shop'}>Shop Now</Link>
            </div>


          </div>

          <div>

            <img src={cover2} className=' w-28' />
          </div>
        </div>

      </div>


      {/* Latest Produt  */}

      <div className=' flex flex-col items-center justify-center space-y-8 py-6 w-[90%]'>


        <h1 className=' text-center font-semibold  text-xl md:text-3xl'>Our Newest Product</h1>
        <h1 className=' text-gray-700 text-center text-lg'>Made of the best materials and with a design that follows the times</h1>


        <div >

          <Product col={4} />
        </div>

        {/* To Do  */}

      </div>



      {/* Deliv  */}


      <div className=' grid  grid-cols-1 md:grid-cols-2 gap-4 w-[90%]'>


        <div className=' grid md:grid-cols-2 grid-cols-1'>
          <h1 className='md:col-span-2 col-span-1 text-xl  md:text-3xl font-bold'>We guarantee the safety of your shopping</h1>

          <div className=' flex flex-col' >
            <div className=' -ml-4 flex flex-row items-center'>
              <img src={fast} alt="" />
              <h1 className=' text-lg font-semibold'>Fast Shiiping</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
          </div>

          {/* cols 2 */}
          <div className=' flex flex-col' >
            <div className='-ml-4 flex flex-row items-center'>
              <img src={safeDelivery} alt="" />
              <h1 className=' text-lg font-bold'>Safe Delivery</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
          </div>

          {/* col 3  */}
          <div className=' flex flex-col' >
            <div className='-ml-4 flex flex-row items-center'>
              <img src={returnSafe} alt="" />
              <h1 className=' text-lg font-bold'>Safe Delivery</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
          </div>

          {/* col 4  */}
          <div className=' flex flex-col' >
            <div className='-ml-4 flex flex-row items-center'>
              <img src={allTime} alt="" />
              <h1 className=' text-lg font-bold'>Safe Delivery</h1>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
          </div>


        </div>








        <div className=''>

          <img src={midSection} alt="" className=' h-96 w-full' />
        </div>

      </div>


      {/* Latest Blog  */}


      <div className='w-[90%] flex flex-col items-center justify-center'>
        <LatestBlog />
      </div>


      {/* end Latest log  */}


      {/* Email sub start  */}


      <div className=' w-[90%] flex flex-col items-center justify-center flex-1'>

        <EmailSubscription />
      </div>


      {/* email sub ends  */}


      {/* end  mid section */}
    </div>








  </div>
}

export default HomePage