import React from 'react'
import { NavBar } from '../NavBar'
import { SidBar } from '../SideBar'
import { Box } from '@mui/material'

export function Layout() {
    return (
        <>

            <NavBar />
            <SidBar />

            {/* <Box 
             component={'ul'}
             sx={{ width:'100vw', height:'100vh',  backgroundColor:'blue'}}
            >

            </Box> */}
        </>
    )
}

