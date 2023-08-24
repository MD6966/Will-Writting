import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const NavBarLinks = () => {
  return (
    <div>
       <Button variant='outlined'
      component={Link}
      to='/login'
      > Login</Button>
       <Button 
       sx={{ml:1}}
       variant='contained'
      component={Link}
      to='auth/register'
      > SignUp</Button>
    </div>
  )
}

export default NavBarLinks
