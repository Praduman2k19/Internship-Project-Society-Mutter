import React, {useState} from 'react'
import { Link, Route, Router } from 'react-router-dom'

const Explore = () => {
  const [inputData, setinputData] = useState('')
  
  localStorage.setItem("inputData", inputData);
  const setInputData=(ev)=>{
    setinputData(ev.target.value)
    localStorage.setItem("inputData", inputData);

  }
  const functionCall=()=>{
    console.log(inputData)
    
  }
  return (
    <div>
      <input placeholder="Let's Explore..." value={inputData} type="text" onChange={setInputData} />
      <button onClick={functionCall}><Link className='link' to={'/Home'}>Go</Link></button>
    </div>
  )
}

export default Explore