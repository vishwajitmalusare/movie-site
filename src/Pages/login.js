import React from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Rating,
  Typography,
} from "@mui/material"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

export default function Login() {
  return (
    <>
     <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6%",
        }}
      >
    <Card
    raised
    sx={{
      width: "30%",
      height: "70vh",
    }}
    >
      <CardHeader 
      style={{
        textAlign: "center"
      }}
      title="Login" />
   <CardContent>

    <div 
    style={{
      display: "flex",
      flexDirection: "column",
      gap:"50px"
    }}>

    <TextField label="Login Id" variant='standard' />
  
    <TextField label="Password" variant='standard' type = "password"  />
    
    <div 
    style={{
      display:"flex",
      flexDirection:"row",
      justifyContent: "center",
      gap: "60px",
      marginTop: "10px"
    }}>
    <Button variant='outlined' >Login</Button>
    <Button variant='outlined' >Cancel</Button>
    
    </div>
    <Link 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
          }}
          href="/registration"
          underline="hover"
          >Don't have account ? Please Signup</Link>
    </div>
   
   </CardContent>
    </Card>
    </div>
    </>
  )
}
