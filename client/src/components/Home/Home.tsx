import { Box, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Poster from './_Poster';
import axios from 'axios';
import { gsap } from 'gsap';

function Home() {
    const classes: any = useStyles();
    const [nowShowing, setNowShowing] = useState([]);
    const [comingSoon, setComingSoon] = useState([]);

    // now showing
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3de13412db60abf77d28af9deb0f538b&language=en-US&page=1')
        .then(res => {console.log(res); return res;})
        .then(res => setNowShowing(res.data.results.slice(0,5)));
    }, []);

    // coming soon
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3de13412db60abf77d28af9deb0f538b&language=en-US&page=1')
        .then(res => {console.log(res); return res;})
        .then(res => setComingSoon(res.data.results.slice(0,5)));
    }, []);

    // animation
    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.poster-container', {visibility: 'visible', opacity: 1, duration: 0.5, ease: 'power3.easeOut', stagger: 0.5})
        .to('.poster', { opacity: 0, duration: 0.5, ease: 'power2.easeOut', stagger: 0.5 })
    }, []);
    return (
        <>
            <Box mb={5} className={`${classes.posterContainer} poster-container`}>
                <Typography variant="h5" className={classes.header}>Now showing</Typography>
                <div className={classes.posterIndiContainer}>
                {
                    nowShowing && nowShowing.map((poster: any) => (<Poster data={poster} key={poster.id} />))
                }
                </div>
            </Box>
            <Box mb={5} className={`${classes.posterContainer} poster-container`}>
                <Typography variant="h5" className={classes.header}>Coming Soon</Typography>
                <div className={classes.posterIndiContainer}>
                {
                    comingSoon && comingSoon.map((poster: any) => (<Poster data={poster} key={poster.id} comingSoon={true} />))
                }
                </div>
            </Box>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    posterContainer: {
        visibility: 'hidden',
        opacity: 0
    },
    posterIndiContainer: {
        maxHeight: '350px',
        overflowY: 'hidden',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        '&::-webkit-scrollbar': {
            height: '5px',
            background: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#363036',
            borderRadius: theme.shape.borderRadius
        },
    }
}));

export default Home;