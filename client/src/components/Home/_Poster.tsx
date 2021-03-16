import { Box, makeStyles, Typography } from '@material-ui/core';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useHistory } from 'react-router-dom';

// interface Poster {
//     title: string,
//     overview: string
//     poster_path?: string,
//     poster?: string
// }

function _Poster({ data, comingSoon, noHover }: any) {
    const classes = useStyles();
    let history = useHistory();
    const poster_path = 'poster_path' in data ? `https://image.tmdb.org/t/p/original${data.poster_path}` : data.poster_url;
    let details_ref: any = useRef(null);

    const showDetails = () => {
        return !noHover && gsap.to(details_ref, { top: 0, ease: 'power3.easeOut'});
    }

    const hideDetails = () => {
        return !noHover && gsap.to(details_ref, { top: '100%', ease: 'power3.easeOut'});
    }
    console.log(data);

    const redirect = () => {
        history.push({
            pathname: '/movie',
            state: {
                data: data
            }
        });
    }

    return (
        <div
            className={`${classes.container} poster`} 
            onMouseOver={showDetails} 
            onMouseLeave={hideDetails} 
            onClick={redirect}
        >
            <div className={classes.imgContainer}>
                <div className={classes.detailsContainer} ref={d => (details_ref = d)}>
                    <Typography variant="body1" className={classes.detailsTitle}>{data.title}</Typography>
                    {
                        data.time ? data.time.map((sched: any) => (
                            <Box display="flex" justifyContent="space-around" width="100%" marginBottom="16px">
                                <Typography variant="body2">{sched.time}</Typography>
                                <Typography variant="body2" color="primary">Cinema {sched.cinema}</Typography>
                            </Box>
                        ))
                        : <Typography variant="body2" color="primary">{data.release_date}</Typography>
                    }
                </div>
                <img src={poster_path} alt="poster" className={classes.poster}/>        
            </div>
            { !noHover && <Typography variant="body1" className={classes.title}>{data.title}</Typography>}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'inline-block',
        textAlign: 'center',
        marginRight: theme.spacing(2),
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        // visibility: 'hidden'
    },
    imgContainer: {
        height: '300px',
        width: '200px',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        marginBottom: theme.spacing(1),
        position: 'relative'
    },
    poster: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    title: {
        fontWeight: 'lighter',
        marginBottom: theme.spacing(3)
    },
    detailsContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.83)',
        backdropFilter: 'blur(8px)',
        top: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
    },
    detailsTitle: {
        marginBottom: theme.spacing(2)
    }
}));

export default _Poster;