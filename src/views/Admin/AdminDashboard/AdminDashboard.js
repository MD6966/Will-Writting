import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../components/page/page'
import { Link } from 'react-router-dom'
import CreateForm from '../components/CreateForm/CreateForm'
import PublishedForms from './components/PublishedForms'
import CurrentUsers from './components/CurrentUsers'
const AdminDashboard = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page
    title="Dashboard"
    >
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
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
      }

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
