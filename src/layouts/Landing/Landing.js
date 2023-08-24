import { AppBar, Toolbar  ,Typography, Box, Divider, Button, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Body from './Body'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import Footer from './Footer'
const StyledButton = styled(Button)(({theme})=> ({
  marginTop:theme.spacing(5),
  height:'60px',
  width:'170px',
  fontSize:'1.15rem',
  '&:hover': {
    boxShadow: '0px 0px 8px 2px rgba(255, 255, 255, 0.2)',
  },
}))
const useStyles = makeStyles((theme) => ({
    root:{
      minHeight:'70vh'
    },
    homepage: {
      backgroundImage: 'url("/assets/images/will.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      color: 'white',
      position: 'relative',
    },
    blurOverlay: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      backdropFilter: 'blur(5px)', 
    },
    
}))
const Landing = () => {
    const classes = useStyles()
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
      <div className={classes.homepage}>
  <div className={classes.blurOverlay}>
    <Box sx={{width:'50vw', mt:10, ml:13}}>
  <Typography variant="h2">Will Writing, Trusts & Lasting Power of Attorney</Typography>
  <Typography variant='h4' sx={{mt:2}}>
  The only way you can still be there for your family when you're gone.
  </Typography>
  <StyledButton variant='contained'>
    Get Started 
  </StyledButton>
    </Box>
    </div> 
</div>
        <Footer /> 
    </Page>
  )
}

export default Landing
