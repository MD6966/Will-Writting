import { AppBar, Box, Button, Card, CardContent, CardHeader, Divider, Grid, Tab, Tabs, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../components/page/page'
import { Link } from 'react-router-dom'
import CreateForm from '../components/CreateForm/CreateForm'
import PublishedForms from './components/PublishedForms'
import CurrentUsers from './components/CurrentUsers'
const StyledCard = styled(Card)(({theme})=> ({
  padding: theme.spacing(2),
  color:'#fff',
  background:'linear-gradient(135deg, #13388C, #40A9FF)',
  transition: 'transform 0.3s ease', 
  borderRadius: theme.spacing(2),

  '&:hover': {
    transform: 'scale(1.05)',
  },
  
}))
const StyledContent = styled(CardContent)(({theme})=> ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}))

const AdminDashboard = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page
    title="Dashboard"
    >
      <Grid
      container
      spacing={3}
      >
        <Grid
        item
        sm={12}
        md={4}
        lg={4}
        >
      <StyledCard>
       <CardHeader title="Total Number of Users"/>
       <Divider sx={{background:'#fff'}} />
       <CardContent>
            <Typography variant='h3' fontWeight="bold" textAlign="center">
              5
            </Typography>
        <Box sx={{display:'flex', justifyContent:'center', mt:3}}>
            <Button variant='contained'
            component ={Link}
            to="/admin/all-users"
            >
              View All Users 
            </Button>
        </Box>
       </CardContent>
      </StyledCard>

        </Grid>
        <Grid
        item
        sm={12}
        md={4}
        lg={4}
        >
      <StyledCard>
      <CardHeader title="Total Number of Forms"/>
       <Divider sx={{background:'#fff'}} />
       <CardContent>
            <Typography variant='h3' fontWeight="bold" textAlign="center">
              15
            </Typography>
        <Box sx={{display:'flex', justifyContent:'center', mt:3}}>
            <Button variant='contained'
            component={Link}
            to='/admin/all-forms'
            >
              View All Forms  
            </Button>
        </Box>
       </CardContent>
      </StyledCard>

        </Grid>
      

      </Grid>
      {/* <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{borderBottom:2, borderColor:'divider', width:'100%',
      display:'flex', justifyContent:'center', alignItems:'center', p:2
      }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Create Form" value={0} />
        <Tab label="Published Forms" value={1} />
        <Tab label="Current Users" value={2} />
      </Tabs>
        </Box>
      </Box>

      {value === 0 && 
      <Box sx={{mt:3}}>
      <CreateForm /> 
      </Box>
      }
      {value === 1 && 
      <Box>
        <PublishedForms />
      </Box>
      }
      {value === 2 && 
      <Box>
        <CurrentUsers /> 
      </Box>
      } */}

        {/* <Button
        variant='contained'
        component={Link}
        to="/admin/create-form"
        >
            Create Form
        </Button> */}
    
    </Page>
  )
}

export default AdminDashboard
