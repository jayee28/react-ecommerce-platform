import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import { Children } from 'react'

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    Children[{
        index:true,
        element:<Home/>
    },{
        path:"about",
        element:<About/>
    },{
        path:"cart",
        element:<Cart/>
    },{
        path:"Collection",
        element:<Collection/>
    },{
        path:"contact",
        element:<Contact/>
    },{
        path:"Login",
        element:<Login/>
    },{
        path:"orders",
        element:<Orders/>

    },{
        path:"placerders",
        element:<PlaceOrder/>
    },{
        path:"product",
        element:<Product/>
    }
    ]
])

export default appRouter
