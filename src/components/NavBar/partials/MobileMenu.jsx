/* eslint-disable react/prop-types */
import { Badge, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'

export const MobileMenu = ({isMobileMenuOpen, setIsMobileMenuOpen}) => {

    // console.log(isMobileMenuOpen);

    return (
        <Menu 
        sx={{ mt:'48px' }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
 
          keepMounted
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={setIsMobileMenuOpen}
        >



            <MenuItem>
                <IconButton sx={{ gap:'10px' }}>

                    <AccountCircleIcon />
                    <Typography component={'h2'}>
                        Account
                    </Typography>
                </IconButton>
            </MenuItem>
            <Divider/>
            <MenuItem>

                <IconButton  sx={{ gap:'10px' }}>
                    <Badge badgeContent={4} color='error'>
                        <EmailIcon />
                    </Badge>
                    <Typography component={'h2'}>
                        Email
                    </Typography>
                </IconButton>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <IconButton sx={{ gap:'10px' }}>
                    <Badge badgeContent={15} color='error'>
                        <NotificationsIcon />
                    </Badge>
                    <Typography component={'h2'}>
                        Notification
                    </Typography>
                </IconButton>
            </MenuItem>

        </Menu>
    )
}


