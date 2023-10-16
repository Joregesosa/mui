import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import { MobileMenu } from './partials/MobileMenu';

export function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <AppBar>
            <Toolbar>
                <IconButton >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                    component={'nav'}>
                    <IconButton >

                        <AccountCircleIcon />


                    </IconButton>
                    <IconButton >
                        <Badge badgeContent={4} color='error'>
                            <EmailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton >
                        <Badge badgeContent={15} color='error'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Box>
                <Box
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <IconButton onClick={() => setIsMobileMenuOpen(true)}>
                        <MoreVertIcon />
                    </IconButton>
                </Box>

            </Toolbar>

            <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={() => setIsMobileMenuOpen(false)}
            />
            
        </AppBar>
    )
}