import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/cinema-world-icon.svg';

function NavBar() {
    const classes = useStyles();
    return (
        <Box display="flex" justifyContent="space-between" paddingTop={3} paddingBottom={3}>
            <Box className={classes.brandContainer} display="flex" alignItems="center">
                <img src={logo} alt="Cinema World" className={classes.logo}/>
                <div>
                    <Typography variant="h1" color="primary" className={classes.title}>Cinema</Typography>
                    <Typography variant="h1" className={classes.title}>World</Typography>
                </div>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography variant="h5" className={classes.link}>Home</Typography>
                <Typography variant="h5" className={classes.link}>My Movie</Typography>
                <div className={classes.hamburger}>
                    <div className={classes.hbar}></div>
                    <div className={classes.hbar}></div>
                </div>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    brandContainer: {
        cursor: 'pointer',
        '&:hover': {
            
        }
    },
    logo: {
        width: '5rem',
        marginRight: theme.spacing(1)
    },
    title: {
        fontSize: '1.5rem'
    },
    link: {
        marginLeft: theme.spacing(2),
        cursor: 'pointer',
        transition: 'all 500ms ease-out',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    hamburger: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    hbar: {
        width: '2rem',
        height: '1px',
        margin: '0 1rem',
        backgroundColor: theme.palette.primary.contrastText
    }
}));

export default NavBar;