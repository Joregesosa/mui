/* eslint-disable react/prop-types */
import { Badge, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export const MobileMenu = ({isProfileMenuOpen, setIsProfileMenuOpen}) => {

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
          open={true}
          onClose={setIsProfileMenuOpen}
        >



            <MenuItem>
                <IconButton sx={{ gap:'10px' }}>

                    <AccountBoxIcon />
                    <Typography component={'h2'}>
                        Profile
                    </Typography>
                </IconButton>
            </MenuItem>

            <Divider/>

            <MenuItem>

                <IconButton  sx={{ gap:'10px' }}>
                    <Badge badgeContent={4} color='error'>
                        <DeleteIcon />
                    </Badge>
                    <Typography component={'h2'}>
                        Delete
                    </Typography>
                </IconButton>
            </MenuItem>

            
        </Menu>
    )
}


