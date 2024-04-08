
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'
import Layout from './pages/Layout'
import ProductDetailPage from './pages/ProductDetailPage'
import { Provider } from 'react-redux'
import store from './store/store'



const HomePage= lazy(()=> import("./pages/HomePage"))
const  ShopPage = lazy (()=> import('./pages/ShopPage'))
const CartScreen= lazy(()=> import ('./pages/CartScreen'))
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {


  const queryClient=  new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:0
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    }
  })
 
  


  

  return (
  
   <QueryClientProvider  client={queryClient}>
     <Provider store={store}>

<BrowserRouter>

{/* haeder  */}

<Suspense fallback={<Loader/>}>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route  index element={<HomePage/>}/>
  <Route path='/shop' element={<ShopPage/>}/>
  <Route path='/cart' element={<CartScreen/>}/>
  <Route path='/details' element={<ProductDetailPage/>}/>
  </Route>
</Routes>
</Suspense>
</BrowserRouter>

    </Provider>
   </QueryClientProvider>
  )
}

export default App
