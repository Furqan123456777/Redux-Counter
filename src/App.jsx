import React from 'react'
import Header from './Components/Header'
import { Box, Paper } from '@mui/material'
import AddButtons from './Components/AddButtons'

const App = () => {
  return (
    <>
<center>
<Paper elevation={24}  sx={{width:"25%",height:150,display:"flex",alignItems:"center",
      justifyContent:"center",marginTop:30
    }}>
   <Box sx={{textAlign:"center"}}>
   <Header/>
   <AddButtons/>
   
   </Box>
    </Paper>
</center>
    </>
  )
}

export default App