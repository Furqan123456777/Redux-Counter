import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { add, del } from '../Store/Slice/Slice'

const AddButtons = () => {
  const dis = useDispatch()

  const handleAdd = ()=>{
    dis(add())
  }

  const handleDel = ()=>{
    dis(del())
  }
  return (

<>
<Button onClick={handleAdd} variant='contained' sx={{backgroundColor:"green"}}>
        Add

        </Button>

<Button onClick={handleDel} variant='contained' sx={{backgroundColor:"green",marginLeft:2}}>
Delete

</Button>
</>
        
        
  )
}

export default AddButtons