import React from 'react'
import { Box, Drawer, Typography, Toolbar, Avatar, Divider, List, ListItem,
ListItemText, ListItemButton, ListItemIcon, LinearProgress
} from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import Page from '../../../../components/page'
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx'
const useStyles = makeStyles((theme)=> ({
  selected : {
    background:'#a6bced'
  },
  // icon: {
  //   marginLeft:'auto',
  //   [theme.breakpoints.up('md')]: {
  //     display:'none',
      
  //   }
  // },
  // drawer : {
  //   [theme.breakpoints.down('md')]: {
  //     display:'none'
  //   }
  // },
  // btn: {
  //   [theme.breakpoints.down('md')]: {
  //     display:'none'
  //   }
  // }
}))
const ListData = [
  {id:1, title:'Form 1', icon:<DynamicFormIcon />, to:'/user/front/form-1'  },
  {id:2, title:'Form 2', icon:<DynamicFormIcon />, to:'/user/front/form-2'},
  {id:3, title:'Form 3', icon:<DynamicFormIcon />,},
]
const FrontPage = () => {
  const classes = useStyles()
  const drawerWidth = 240
  const [dOpen, setDopen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const location = useLocation();
  React.useEffect(() => {
    const matchingItem = ListData.find((item) => item.to === location.pathname);
    if (matchingItem) {
      setSelectedIndex(matchingItem.id);
    }
  }, [location.pathname]);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setDopen(false)
  };
  return (
    <Page
    title="User Dashboard"
    >
      <Box sx={{p:4, display:'flex', justifyContent:'center'}}>
      <Outlet />
      </Box>
      <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', border:'none' },
      }}
      PaperProps={{
        sx: {
          background:'#13388C',
          
        }
      }}
      >
        <Toolbar /> 
        <Box>
            <Box sx={{display:'flex', justifyContent:'center',}}>
              <Avatar src='/assets/images/admin.png' sx={{height:'120px', width:'120px', mt:'2rem'}} />
            </Box>
            <Typography sx={{color:'#fff', textAlign:'center'}} variant='h6' gutterBottom> User Name </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1, ml:2 }}>
        <Typography sx={{color:'#fff', mb:1}}> Profile Completed</Typography>
        <LinearProgress variant="determinate" value={60} 
         sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#fff',
          },
        }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{color:'#fff'}}>60%</Typography>

      </Box>
    </Box>
            <Divider /> 
            <Box sx={{p:1}}>
              <Typography sx={{color:'#fff', fontSize:'15px', mt:1 }}> User Dashboard</Typography>
              <List component="nav">
                {ListData.map((val)=> {
                  return(
                    <>
                    <ListItem key={val} disablePadding
                    className={clsx(classes.root, {
                      [classes.selected]: selectedIndex === val.id,
                    })}
                    component={Link}
                    to={val.to}
                    >
                      <ListItemButton
                       selected={selectedIndex === val.id}
                       onClick={(event) => handleListItemClick(event, val.id)}
                       
                      >
                        <ListItemIcon sx={{color:'#fff'}}>
                          {val.icon}
                        </ListItemIcon>
                      <ListItemText primary={val.title} sx={{color:'#fff'}} secondary={
                        <Typography>
                          <Typography sx={{display:'inline', mr:0.5, fontWeight:'bold'}}>
                            Status:
                            </Typography>Published
                        </Typography>
                      } />
                      </ListItemButton>
                    </ListItem>
                    </>
                  )
                })}
              </List>
            </Box>
          </Box>
      </Drawer>
    </Page>
  )
}

export default FrontPage
