import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

// interface Poster {
//     title: string,
//     overview: string
//     poster_path?: string,
//     poster?: string
// }

function _Poster({ data }: any) {
    const classes = useStyles();
    // const prop = {
    //     title: 'Raya and the Last Dragon',
    //     poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg'
    // }
    const base_poster_path = 'https://image.tmdb.org/t/p/original';

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={base_poster_path + data.poster_path} alt="poster" className={classes.poster}/>        
            </div>
            <Typography variant="body1" className={classes.title}>{data.title}</Typography>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'inline-block',
        textAlign: 'center',
        marginRight: theme.spacing(2)
    },
    imgContainer: {
        height: '300px',
        width: '200px',
        backgroundColor: 'gold',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        marginBottom: theme.spacing(1)
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontWeight: 'lighter',
        marginBottom: theme.spacing(3)
    }
}));

export default _Poster;