import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import "./Main.scss";

function Main() {
    const location = useLocation();
  return (
    <div className={`flex flex-column width-100 height-100 main`}>
      <Outlet/>
      {location.pathname !=="/chat && <Footer/>"}
    </div>
  )
}

export default Main;
