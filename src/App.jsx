import React from 'react'

//pages 
import Home from "@pages/Home"
import Cryptocurrencies from "@pages/Cryptocurrencies"
import News from "@pages/News"


//components 
import NavBar from "@components/NavBar"


//styles
import "@styles/global.scss"

//others

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
    </div>
  )
}

export default App