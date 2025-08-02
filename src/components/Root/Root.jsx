import React from 'react'
import NAvbar from '../Navbar/NAvbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <NAvbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root
