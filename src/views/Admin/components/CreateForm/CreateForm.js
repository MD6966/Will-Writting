import { Box, Button, FormControlLabel, Grid, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page'
import Checkbox from '@mui/material/Checkbox';
import CreateDynaminForm from '../CreateDynamicForm'
const CenteredBox = styled(Box)(({theme})=> ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}))
const CreateForm = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  console.log(checked)
  return (
    <Page
    title="Create Form"
    >


      <Typography
      variant='h4'
      fontWeight="bold"
      textAlign="center"
      >
        Create a new form here
      </Typography>
        <CenteredBox>
        <Box
        sx={{mt:2}}
        >
      <FormControlLabel
      label="Dynamic Form"
      control={
        <Checkbox
        checked={checked}
        onChange={handleChange}
        />
      }
      />
      </Box>
  </CenteredBox>
  { checked ? 
  
  <CreateDynaminForm /> 
  : 
          <Box>

      <Grid
      container
      sx={{p:5}}
      spacing={2}
      >
        <Grid
        item
        xs={12}
        md={6}
        lg={6}
        >
          <TextField label="First Name" fullWidth />
        </Grid>
        <Grid
        item
        xs={12}
        md={6}
        lg={6}
        >
          <TextField label="Last Name" fullWidth />
        </Grid>
        <Grid
        item
        xs={12}
        md={6}
        lg={6}
        >
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid
        item
        xs={12}
        md={6}
        lg={6}
        >
          <TextField label="Reference" fullWidth />
        </Grid>
        <Grid
        item
        xs={12}
        md={12}
        lg={12}
        >
          <TextField label="Description 1" fullWidth multiline rows={6} />
        </Grid>
        <Grid
        item
        xs={12}
        md={12}
        lg={12}
        >
          <TextField label="Description 2" fullWidth multiline rows={6} />
        </Grid>
        
        
      </Grid>
      <CenteredBox>
      <Button variant='contained'
        > Create Form </Button>
     </CenteredBox>
          </Box> 
  }
    </Page>
  )
}

export default CreateForm
