
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {counter}=useSelector((state)=>state.Slice)

  return (
    <h1>Counter:{counter}</h1>
    
  )
}

export default Header