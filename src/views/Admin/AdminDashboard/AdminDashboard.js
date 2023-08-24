import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../../../components/page/page'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <Page
    title="Dashboard"
    >
        <Button
        variant='contained'
        component={Link}
        to="/admin/create-form"
        >
            Create Form
        </Button>
    
    </Page>
  )
}

export default AdminDashboard
