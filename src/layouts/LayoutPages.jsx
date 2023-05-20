import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


const LayoutPages = () => {
  return (
    <section>
        <Header />
        <Outlet />
    </section>
  )
}

export default LayoutPages