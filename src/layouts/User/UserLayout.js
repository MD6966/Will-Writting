import React from 'react'
import { AppBar, Avatar, Box, Button, Menu, 
  MenuItem, Toolbar, Typography, Container,
Divider,
List,
ListItem,
ListItemIcon,
ListItemText,
Dialog,
DialogTitle,
DialogContent,
Card,
} from '@mui/material'
import Settings from '@mui/icons-material/Settings';
import { Link, Outlet } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';

const UserLayout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [dOpen, setDopen] = React.useState(false)
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);

  }

  const handleOpenD = () => {
    setDopen(true)
    setAnchorEl(null)
  }
  const handleDclose = () => {
    setDopen(false)
  }
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
                    <Avatar src="/assets/images/user.png" 
                    sx={{background:'#e2e2e2', cursor:'pointer'}}
                    onClick={handleAvatarClick}
                    />
                </Box>

            </Box>
        </Toolbar>
      </AppBar>
      <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      >
        
        <Container>
          <Typography variant='h6' style={{fontWeight:'bold'}}> User Name </Typography>
          </Container>
          <Divider style={{margin:'0px 10px'}} /> 
          <MenuItem onClick={handleOpenD}>
          <PersonIcon /> <Typography sx={{ml:1}}> View Profile </Typography>
          </MenuItem>
          <Divider /> 
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Dialog open={dOpen} fullWidth onClose={handleDclose}>
        <DialogTitle >
         <PersonIcon sx={{verticalAlign:'bottom', fontSize:'2rem'}} />  View Profile 
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Card elevation={2} sx={{p:2}}>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Avatar src="/assets/images/user.png" sx={{height:'50px', background:'#F2f2f2'}} />
            <Typography sx={{mt:1.5, ml:2}} variant='h5'> User Name</Typography>
            </Box>
          </Card>
        </DialogContent>
      </Dialog>
      <Outlet /> 
    </div>
  )
}

export default UserLayout
