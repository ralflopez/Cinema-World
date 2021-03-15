import { Box, makeStyles, Typography } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import logo from '../../assets/cinema-world-icon.svg';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

function NavBar() {
    const classes = useStyles();
    let navbar_ref = useRef(null);

    // animation
    useEffect(() => {
        gsap.from(navbar_ref.current, {opacity: 0, duration: 0.5, ease: 'power3.easeOut'})
    }, []);

    return (
        <div ref={navbar_ref}>
            <Box display="flex" justifyContent="space-between" paddingTop={3} paddingBottom={3}>
                <Box className={classes.brandContainer} display="flex" alignItems="center">
                    <img src={logo} alt="Cinema World" className={classes.logo}/>
                    <div>
                        <Typography variant="h1" color="primary" className={classes.title}>Cinema</Typography>
                        <Typography variant="h1" className={classes.title}>World</Typography>
                    </div>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography variant="h5">
                        <Link to="/" className={classes.link}>Home</Link>
                    </Typography>
                    <Typography variant="h5" className={classes.link}>My Movie</Typography>
                    <div className={classes.hamburger}>
                        <div className={classes.hbar}></div>
                        <div className={classes.hbar}></div>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    brandContainer: {
        cursor: 'pointer',
        '&:hover': {
            
        },
    },
    logo: {
        width: '4.5rem',
        marginRight: theme.spacing(2)
    },
    title: {
        fontSize: '1.3rem'
    },
    link: {
        marginLeft: theme.spacing(2),
        cursor: 'pointer',
        transition: 'all 500ms ease-out',
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
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