import React from 'react'
import Home from './Nav'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <nav />
        {children}
    </div>
  )
}

export default MainPageLayout