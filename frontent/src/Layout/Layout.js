import React from 'react'
import  { Link, Outlet } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (    
    <>
   
    <div id='header'>
      <Link to="home">Home</Link>
      <Link to="insert">Insert Data</Link>
      <Link to="display">Dispaly</Link>
    </div>

    <div id='content'>
    <Outlet/>
    </div>

    <hr size="4" color='red'/>
    www.footer.com
    </>  
  )
}

export default Layout
