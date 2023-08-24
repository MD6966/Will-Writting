import React from 'react'
import { Box, styled, AppBar, Toolbar, Typography,Button } from '@mui/material'
import Page from '../../components/page/page'
import { Outlet } from 'react-router'
const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'100vh',
    background:'#ffffff'
}))
const StyledContent = styled(Box)(({theme})=> ({
    padding: theme.spacing(5)
}))

const AdminLayout = () => {
  return (
    <Page
    title="Admin"
    >
        <StyledRoot>
      <AppBar position='static'>
        <Toolbar>
            <Typography> Admin Dashboard </Typography>
        </Toolbar>
        </AppBar> 
        <StyledContent>
            <Outlet />
        </StyledContent>
    </StyledRoot>
    </Page>
  )
}

export default AdminLayout
