import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer";



const rootReducers = combineReducers({
    product: productReducer
})


export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>

