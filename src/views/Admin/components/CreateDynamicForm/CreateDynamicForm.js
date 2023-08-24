import React, {useState} from 'react'
import { Select, FormControl, MenuItem, TextField, 
  Button, Box, FormControlLabel, InputLabel, Checkbox } from '@mui/material';

const CreateDynamicForm = () => {
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
    <div>
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
    <div>
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
    </div>
  </div>
  )
}

export default CreateDynamicForm
