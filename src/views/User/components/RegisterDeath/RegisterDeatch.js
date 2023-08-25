import { Avatar, Box, Typography, } from '@mui/material'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page'
import { useNavigate } from 'react-router'

const StyledRoot = styled(Box)(({theme})=>({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  marginTop: theme.spacing(5)
}))
const StyledRow = styled(TableRow)(({theme})=>({
  background: theme.palette.primary.main
}))
const StyledCell = styled(TableCell)(({theme})=>({
  color:'#fff'
}))
const tableData = [
  {id:1, name:'John', email:'john@abc.com', phone:'123456'},
  {id:2, name:'Kattie', email:'katie@abc.com', phone:'123456'},
  {id:3, name:'Paul', email:'paul@abc.com', phone:'123456'},
  {id:4, name:'Steve', email:'steve@abc.com', phone:'123456'},
  {id:5, name:'Smith', email:'smith@abc.com', phone:'123456'},

]
const RegisterDeatch = () => {
  const navigate = useNavigate()
  const postData = (data) => {
      navigate('/user/profile-data', {state: data})
  }
  return (
    <Page
    title="All Users"
    >
      <Box sx={{p:10}}>
        <Typography variant='h4' fontWeight="bold" textAlign="center">
          All profiles 
        </Typography>
        <Box sx={{mt:2}}>
        <TableContainer sx={{border:'1px solid rgba(19, 56, 140, 0.2)'}}>

<Table>
  <TableHead>
  <StyledRow>
      <StyledCell>Name</StyledCell>         
      <StyledCell>Email</StyledCell>         
      <StyledCell>Contact</StyledCell>         
  </StyledRow>
  </TableHead>
  <TableBody >
      {
          tableData.map((val, ind)=> {
              return(
      <TableRow key={ind}
      onClick={()=> postData(val)}
      sx={{cursor:'pointer'}}
      >
          <TableCell>
            <Box sx={{display:'flex'}}>
              <Avatar src="/assets/images/user.png" />
              <Box sx={{mt:1, ml:1}}>
            {val.name}
              </Box>
            </Box>
            </TableCell>
          <TableCell>{val.email}</TableCell>
          <TableCell>{val.phone}</TableCell>

      </TableRow>
              )
          })
      }
  </TableBody>
</Table>
  </TableContainer>
        </Box>
      </Box>
    </Page>
  )
}

export default RegisterDeatch
