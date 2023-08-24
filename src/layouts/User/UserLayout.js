import React from 'react'
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <Typography> User Dashboard</Typography>
            <Box sx={{ml:'auto', display:'flex'}}>
                <Box>
                <Button variant='contained'
                component={Link}
                to='/user/death-register'
                > Regsiter a death</Button>
                <Button variant='contained' 
                component={Link}
                to='/user/complete-form'
                sx={{ml:2}}> Complete Form</Button>
                </Box>
                <Box sx={{ml:2}}>
                    <Avatar src="/assets/images/user.png" sx={{background:'#e2e2e2'}} />
                </Box>

            </Box>
        </Toolbar>
      </AppBar>
      <Outlet /> 
    </div>
  )
}

export default UserLayout
