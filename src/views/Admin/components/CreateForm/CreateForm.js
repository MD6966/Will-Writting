import { Box, Button, FormControlLabel, Grid, TextField, 
  Typography, styled, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, {useState} from 'react'
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
  const [label, setLabel] = useState('');
  const [fieldType, setFieldType] = useState('TextField');
  const [formFields, setFormFields] = useState([]);
  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const handleFieldTypeChange = (event) => {
    setFieldType(event.target.value);
  };

  const handleCreateField = () => {
    const newField = { label, fieldType };
    setFormFields([...formFields, newField]);
    setLabel('');
    setFieldType('TextField');
  };
  const handleRemoveField = (indexToRemove) => {
    const updatedFields = formFields.filter((_, index) => index !== indexToRemove);
    setFormFields(updatedFields);
  };
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
        md={12}
        lg={12}
        >
          <TextField label="Form Name" fullWidth />
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
          <MenuItem value={10}>Open</MenuItem>
          <MenuItem value={20}>Private</MenuItem>
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
        md={4}
        lg={4}
        >
      {formFields.map((field, index) => (
        <Box key={index} mt={2}>
          {field.fieldType === 'TextField' && (
            <TextField label={field.label} />
          )}
          {field.fieldType === 'TextArea' && (
            <TextField label={field.label} multiline rows={4} />
          )}
          {field.fieldType === 'Select' && (
            <FormControl>
              <InputLabel>{field.label}</InputLabel>
              <Select label={field.label}>
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
                <MenuItem value="Option 3">Option 3</MenuItem>
              </Select>
            </FormControl>
          )}
          {field.fieldType === 'Checkbox' && (
            <FormControlLabel control={<Checkbox />} label={field.label} />
          )}
          <Button onClick={() => handleRemoveField(index)} 
          variant='contained'
          sx={{verticalAlign:'bottom', ml:2}}>Remove</Button>
        </Box>
      ))}
    </Grid>

        <Grid
        item
        xs={12}
        md={12}
        lg={12}
        >
    <TextField label="Label" value={label} onChange={handleLabelChange} sx={{mr:2}} />
    <FormControl>
      <Select value={fieldType} onChange={handleFieldTypeChange} sx={{mr:2}}>
        <MenuItem value="TextField">Text Field</MenuItem>
        <MenuItem value="TextArea">Text Area</MenuItem>
        <MenuItem value="Select">Select</MenuItem>
        <MenuItem value="Checkbox">Checkbox</MenuItem>
      </Select>
    </FormControl>
    <Button onClick={handleCreateField} variant="contained" sx={{mt:1}}>
      Create Field
    </Button>
  
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
