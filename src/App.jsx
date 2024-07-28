import React from 'react'

//pages 
import Home from "@pages/Home"
import Cryptocurrencies from "@pages/Cryptocurrencies"
import News from "@pages/News"
import LogIn from "@pages/LogIn"
import GetStarted from "@pages/GetStarted"


//components 
import NavBar from "@components/NavBar"


//styles
import "@styles/global.scss"

//libraries

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter ([
  {path: "/", 
    element: <Layout/> ,
    children: [
      {index: true, element: <Home/> },
      {path: "/cryptocurrencies", element: <Cryptocurrencies/> },
      {path: "/news", element: <News/> },
      {path: "/login", element: <LogIn/> },
      {path: "/get-started", element: <GetStarted/> },
      
    ]
  }
])


function App () {
  return <RouterProvider router={router} /> ;
}

export default App