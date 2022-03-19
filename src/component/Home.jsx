import React from 'react'

const Home = () => {
    const inputData=localStorage.getItem("inputData");
  return (
    <div>Input Data is: {inputData}</div>
  )
}

export default Home