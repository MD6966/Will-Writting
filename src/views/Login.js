import { FormControl, InputLabel, MenuItem, Select, Button, Box, Grid, Hidden, Typography, TextField, Card, CardContent, AppBar, Toolbar, Dialog, DialogTitle, Divider, DialogActions  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { Link } from 'react-router-dom';
import Page from '../components/page/page';
import Nav from '../components/AppBar/Header'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=> ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#e2e2e2',
  },
  card: {
    padding: 2,
    marginLeft:5,
    marginRight:5,
    width: '400px',
  },
  link:{
    textAlign:'right',
    cursor: 'pointer'
  }
}))
const Login = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  return (<Page
  title="Login"
  >
    <AppBar>
      <Toolbar>
        <Typography> Login </Typography>
      </Toolbar>
    </AppBar>
       <div className={classes.root}>
      <Card className={classes.card} elevation={3}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Typography
              className={classes.link}
              onClick={() => setOpen(true)}
              >
                Forgot Passowrd?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary"
              component={Link}
              to='/admin/dashboard'
              >
                Admin Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary"
              component={Link}
               to='/user/front'
              >
                User Login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
    <Dialog open={open} fullWidth onClose={()=> setOpen(false)}>
      <DialogTitle>
        Reset Your Password
      </DialogTitle>
      <Divider />
      <CardContent>
        <TextField label="Email" placeholder='Enter your registered email address' fullWidth/>
      </CardContent>
      <DialogActions>
        <Button variant='contained'>
          Reset
        </Button>
      </DialogActions>
    </Dialog>
  
       
  
  </Page>
  )
}

export default Login;
    