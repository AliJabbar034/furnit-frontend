import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface Product {
    _id: string,
    title: string,
    description: string,
    price: number,
    images: string[],
    averageRating: number,
    colors: string[]
}

interface ProductState {
    product: Product[]
}

const initialState: ProductState = {
    product: []
}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProduct: (state, action: PayloadAction<Product[]>) => {
            return {
                ...state,
                product: action.payload

            }
        }
    }
})


export const productReducer = productSlice.reducer;
export const poductActions = productSlice.actions