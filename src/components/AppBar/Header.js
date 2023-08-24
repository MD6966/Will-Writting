import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material'
import React from 'react'
import './styles.css'
import NavBarLinks from '../../layouts/Landing/NavBarLinks'
import CallIcon from '@mui/icons-material/Call';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Header = () => {
  return (
    <div>
            <div className="app-bars-container">
      <AppBar position="fixed" sx={{height:'45px'}}>
        <Box sx={{p:1.5, }}>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Box sx={{ml:10, display:'flex',}}>
                <Box >
                  <CallIcon sx={{verticalAlign:'bottom'}} />
                  <Typography sx={{display:'inline'}}> 0-123-456-789 </Typography>
                </Box>
                <Box sx={{ml:2}}>
                  <PhoneAndroidIcon sx={{verticalAlign:'bottom'}} />
                  <Typography sx={{display:'inline'}}> 0-123-456-789 </Typography>
                </Box>
                <Box sx={{ml:2}}>
                  <MailOutlineIcon sx={{verticalAlign:'bottom'}} />
                  <Typography sx={{display:'inline'}}> info@abc.com </Typography>
                </Box>
              </Box>
              <Box sx={{mr:10, display:'flex',mt:-1}}>
              <FacebookIcon  sx={{fontSize:'1.75rem', ml:1}}/>
              <InstagramIcon  sx={{fontSize:'1.75rem', ml:1}}/> 
              <LinkedInIcon  sx={{fontSize:'1.75rem', ml:1}}/> 
              <YouTubeIcon sx={{fontSize:'1.75rem', ml:1}}/> 
              </Box>
          </Box>
        </Box>
      </AppBar>
      <AppBar position="fixed" className="second-app-bar" sx={{bgcolor:'#ffff'}} >
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography variant="h6" sx={{color:'#000'}}>Company Logo </Typography>
          <Box>
            <Button sx={{fontSize:'1.15rem', textTransform:'none'}}>
              Home 
              </Button> 
              <Button sx={{fontSize:'1.15rem', textTransform:'none'}}>
               Will & Testament
              </Button> 
              <Button sx={{fontSize:'1.15rem', textTransform:'none'}}>
              Contact Us 
              </Button> 
              <Button sx={{fontSize:'1.15rem', textTransform:'none'}}>
              Resources
              </Button> 
              
            </Box>
          <Box>
            <NavBarLinks  /> 
            </Box>
        </Toolbar>
      </AppBar>
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
    </div>
  )
}

export default Header
