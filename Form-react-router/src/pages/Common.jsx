import React from 'react'
import { Outlet } from 'react-router-dom'

const Common = () => {
  return (
    <div className="sectionpage">
    <div className="container">
      <div className="contai">
        <div className="components">
          <div className="component">Component 1</div>
          <div className="component">Component 2</div>
          <div className="component">Component 3</div>
        </div>
        <div className="box">Box</div>
      </div>
    </div>
    <Outlet/>
  </div>
  )
}

export default Common
