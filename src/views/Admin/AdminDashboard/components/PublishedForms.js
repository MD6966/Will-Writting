import React from 'react'
import { Box, Button, Card, CardActions, CardContent, 
    CardHeader, Divider, Grid, Typography, styled } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const StyledRoot = styled(Box)(({theme})=> ({
    marginTop: theme.spacing(2)
}))
const StyledForm = styled(Card)(({theme}) => ({

}))
const StyledHeader = styled(CardHeader)(({theme})=> ({
    background: theme.palette.primary.main
}))
const dummyData = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor libero eu mauris facilisis, at cursus nunc volutpat.',
    },
    {
      id: 2,
      name: 'Steve',
      email: 'bob@example.com',
      message: 'Vestibulum facilisis consectetur urna, eget aliquam odio congue eget. Fusce id ipsum in enim congue ullamcorper.',
    },
    {
      id: 3,
      name: 'Charlie',
      email: 'charlie@example.com',
      message: 'Sed rhoncus ex eu metus ullamcorper, in feugiat velit hendrerit. Morbi ac fermentum libero, eu efficitur ex.',
    },
    {
      id: 4,
      name: 'David',
      email: 'david@example.com',
      message: 'Pellent varius. Duis a lacinia justo, a feugiat est. Sed dictum sem nec lectus dignissim, eget volutpat nulla posuere.',
    },
    {
      id: 5,
      name: 'Eve',
      email: 'eve@example.com',
      message: 'Maecenas non fermentum justo. Sed gravida ante et leo bibendum, in scelerisque ex varius. Fusce eu justo eu neque dignissim sagittis.',
    },
    {
      id: 6,
      name: 'Frank',
      email: 'frank@example.com',
      message: 'Aliquam nec sem sit amet mauris volutpat vestibulum. Sed feugiat ipsum vel lectus tincidunt, et varius odio venenatis.',
    },
  ];
const PublishedForms = () => {
  return (
    <StyledRoot>
        <Grid container spacing={3}>
            {dummyData.map((val, ind)=>{
                return(
            <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={ind}
            >
                    <StyledForm elevation={3}>
            <StyledHeader title={
            <Typography sx={{color:'#fff'}}>
                Form No {ind+1}.
            </Typography>
            }/>
            <CardContent>
                <Typography>
                    <Typography sx={{fontWeight:'bold', display:'inline'}}>Name:</Typography>
                    <Typography sx={{display:'inline', ml:1}}>{val.name}</Typography>
                </Typography>
                <Typography sx={{mt:1}}>
                    <Typography sx={{fontWeight:'bold', display:'inline'}}>Email:</Typography>
                    <Typography sx={{display:'inline', ml:1}}>{val.email}</Typography>
                </Typography>
                <Typography sx={{mt:1}}>
                    <Typography sx={{fontWeight:'bold', display:'inline'}}>Message:</Typography>
                    <Typography sx={{display:'inline', ml:1}}>
                    {val.message}
                    </Typography>
                </Typography>
                <Box sx={{mt:1, display:'flex'}}>
                <Typography sx={{fontWeight:'bold', verticalAlign:'bottom'}}>Social Media:</Typography>
                <Box sx={{display:'flex',}}>
              <FacebookIcon  sx={{fontSize:'1.75rem', ml:1}}/>
              <InstagramIcon  sx={{fontSize:'1.75rem', ml:1}}/> 
              <LinkedInIcon  sx={{fontSize:'1.75rem', ml:1}}/> 
              <YouTubeIcon sx={{fontSize:'1.75rem', ml:1}}/> 
              </Box>
                </Box>
            </CardContent>
            <Divider />

            <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
                <Button variant='outlined' endIcon={<EditIcon />}> Edit Form</Button>
                <Button variant='contained' endIcon={<DeleteOutlineIcon /> }> Delete Form</Button>
            </CardActions>
        </StyledForm>
            </Grid>
                )
            })}
        </Grid>
        
      
    </StyledRoot>
  )
}

export default PublishedForms
