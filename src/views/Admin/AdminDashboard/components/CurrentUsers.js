import React, {useState, useEffect} from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material'
import { Grid, RotatingLines } from 'react-loader-spinner'
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
const CurrentUsers = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);
  return (
    <StyledRoot>
        {
            isLoading ? (
                <Grid
       color="#13388c"
       strokeWidth="5"
       animationDuration="0.75"
       width="80"
       visible={isLoading}/>

            ) : (
                <TableContainer sx={{border:'1px solid rgba(19, 56, 140, 0.2)'}}>

                <Table>
                  <TableHead>
                  <StyledRow>
                      <StyledCell>Sr No</StyledCell>
                      <StyledCell>Name</StyledCell>         
                      <StyledCell>Email</StyledCell>         
                      <StyledCell>Contact</StyledCell>         
                  </StyledRow>
                  </TableHead>
                  <TableBody >
                      {
                          tableData.map((val, ind)=> {
                              return(
                      <TableRow key={ind}>
                          <TableCell>{val.id}</TableCell>
                          <TableCell>{val.name}</TableCell>
                          <TableCell>{val.email}</TableCell>
                          <TableCell>{val.phone}</TableCell>
          
                      </TableRow>
                              )
                          })
                      }
                  </TableBody>
                </Table>
                  </TableContainer>
            )
        }
        
    </StyledRoot>
  )
}

export default CurrentUsers
