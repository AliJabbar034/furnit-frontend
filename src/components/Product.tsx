
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useNavigation } from 'react-router-dom';

interface propdata {
    col: number
}

interface Product {
    _id: string,
    title: string,
    description: string,
    price: number,
    images: string[],
    averageRating: number,
    colors: string[]
}

const Product: React.FC<propdata> = (props) => {

    const navigation = useNavigate()

    const { product } = useSelector((state: RootState) => state.product)




    return (
        <div>
            {
                product.length === 0 ?
                    <div>No Product Found</div> :

                    <div className={`grid md:grid-cols-${props.col} grid-cols-1 gap-4`}>
                        {
                            product.map((item: Product) => (
                                <div className=' flex flex-col space-y-4 relative cursor-pointer hover:opacity-50 group' key={item._id} onClick={() => {
                                    navigation(`/product/${item._id}`)
                                }}>
                                    <img src={`http://localhost:5000/${item.images[0]}`} alt="" className=' rounded-sm hover:cursor-pointer ' />
                                    <div className=' flex flex-row justify-between px-2'>
                                        <h1 className=' font-semibold'>{item.title}</h1>
                                        <h1>${item.price}</h1>
                                    </div>

                                    <div className=' absolute items-center justify-center  hidden right-4 group-hover:flex flex-col space-y-4'>


                                        <div className=' bg-gray-400 h-10 w-10 rounded-full items-center justify-center flex'>
                                            <CiShoppingCart color='black' size={20} />
                                        </div>
                                        <div className=' bg-gray-400 h-10 w-10 rounded-full items-center justify-center flex' onClick={() => alert("added to favourite")}>
                                            <FaHeart color='red' size={20} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Product