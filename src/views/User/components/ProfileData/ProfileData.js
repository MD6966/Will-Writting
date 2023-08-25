import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Page from '../../../../components/page/page'
import { useSnackbar } from 'notistack'
const StyledRoot = styled(Box)(({theme})=> ({
  padding: theme.spacing(10),
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}))
const ProfileData = () => {
  const {state} = useLocation()
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()
  // console.log(state)
  const handleNotiy = () => {
    enqueueSnackbar("Message Sent to all !", {
      variant:'success'
    })
    navigate('/user/death-register', {replace: true})
  }
  return (
    <Page
    title="Notify Death"
    >
      <StyledRoot>
        <Box>
        <Box>
          <Typography
          variant='h4'
          sx={{
            textAlign:'center',
            fontWeight:'bold',
            mb:2
          }}
          
          >{state.name}</Typography>
        </Box>
        <Card sx={{width:'50vw', background:'#f2f2f2'}}>
          <CardHeader title="Notify Death" />
          <Divider /> 
          <CardContent>
             <TextField label="Enter the message" 
            fullWidth
            multiline
            rows={8}
            />
          </CardContent>
          <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
            <Button variant="contained"
            onClick={handleNotiy}
            >
              Notify All of death
            </Button>
          </CardActions>
        </Card>
            </Box>
      </StyledRoot>
    </Page>
  )
}

export default ProfileData
