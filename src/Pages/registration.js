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

export default function Registration() {
  return (
   <>
   <div
   style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%'
   }}
   >
    <Card
    raised
    sx={{
      width: '30%',
      height: '85vh'
    }}
    >
      <CardHeader
      style={{
        textAlign: 'center'
      }}
      title="Registration"
      />
      <CardContent>
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}
        >
          <TextField label='First Name' variant='standard' />
          <TextField label='Last Name' variant='standard' />
          <TextField label='Email' variant='standard' />
          <TextField label='Password' variant='standard' type='password' />
          <TextField label='Confirm Password' variant='standard' type='password' />

          <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '70px',
            marginTop: '20px'
          }}
          >
            <Button variant='outlined' >Signup</Button>
            <Button variant='outlined' >Cancel</Button>
          </div>
          <Link 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
          }}
          href="/login"
          underline="hover"
          >Already have account ? Please Login</Link>
        </div>
      </CardContent>
    </Card>
   </div>
   </>
  )
}
