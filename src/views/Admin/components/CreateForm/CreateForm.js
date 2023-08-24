import { Box, Button, FormControlLabel, Grid, TextField, 
  Typography, styled, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
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
  const [age, setAge] = React.useState(10);
  const [status, setStatus] = React.useState(10);
  const [notify, setNotify] = React.useState(10)
  const handleChangeS = (event) => {
    setAge(event.target.value);
  };
  const handleChangeST = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeN = (event) => {
    setNotify(event.target.value);
  };
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
        md={4}
        lg={4}
        >
           <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Form Visibility</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Form Visibility"
          onChange={handleChangeS}
        >
          <MenuItem value={10}>On</MenuItem>
          <MenuItem value={20}>OFF</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid
        item
        xs={12}
        md={4}
        lg={4}
        >
           <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Form Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Form Visibility"
          onChange={handleChangeST}
        >
          <MenuItem value={10}>Draft</MenuItem>
          <MenuItem value={20}>Publish</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid
        item
        xs={12}
        md={4}
        lg={4}
        >
           <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Notify</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notify}
          label="Notify"
          onChange={handleChangeN}
        >
          <MenuItem value={10}>No</MenuItem>
          <MenuItem value={20}>Yes</MenuItem>
        </Select>
      </FormControl>
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
