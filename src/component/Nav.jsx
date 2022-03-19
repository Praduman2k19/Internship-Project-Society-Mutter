import React from 'react'
import './Nav.css'
import {Link}  from "react-router-dom";
const pages = [
  {text:'Home', to:'/Home'},
  {text:'Explore', to:'/'},  
  {text:'Profile',to:'/Profile'}
];

const Nav = () => {
  return (
    <div className='nav'>
      
            {
              pages.map(item=><div className='item' key={item.to}><Link className='link' to={item.to}>{item.text}</Link></div>)
            }
    </div>
  )
}

export default Nav

