import React from 'react'

//pages 
import Home from "@pages/Home"
import Cryptocurrencies from "@pages/Cryptocurrencies"
import LearnMore from "@pages/LearnMore"
import LogIn from "@pages/LogIn"
import GetStarted from "@pages/GetStarted"
import CoinDetails from "@pages/CoinDetails"

//components 
import NavBar from "@components/NavBar"
import Footer from '@components/Footer'

//styles
import "@styles/global.scss"

//other
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Layout = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter ([
  {path: "/", 
    element: <Layout/> ,
    children: [
      {index: true, element: <Home/> },
      {path: "/cryptocurrencies", element: <Cryptocurrencies/> },
      {path: "/coin/:id", element: <CoinDetails/> },
      {path: "/learn-more", element: <LearnMore/> },
      {path: "/login", element: <LogIn/> },
      {path: "/get-started", element: <GetStarted/> },
    ]
  }
])

const queryClient= new QueryClient();

function App () {
  return   (
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} /> ;
  </QueryClientProvider>
  )
}

export default App