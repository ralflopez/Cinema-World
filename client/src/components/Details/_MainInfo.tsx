import React, { useEffect, useState } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Poster from '../Home/_Poster';
import axios from 'axios';

function _MainInfo({data}: any) {
    const classes = useStyles();
    const [dataApi, setDataApi] = useState<any>({});

    //fetch data from movie api
    useEffect(() => {
        if(data.overview) return;
        const queryUrl: string = `https://api.themoviedb.org/3/search/movie?api_key=3de13412db60abf77d28af9deb0f538b&language=en-US&page=1&year=${data.year}&query=${data.title.replace(/\s+/g, '+')}`;

        axios.get(queryUrl)
        .then(res => setDataApi(res.data.results[0]));

    }, [data]);

    return (
        <Box display="flex" className={classes.container}>
            <Poster data={data} noHover={true}/>
            <Box className={classes.contentContainer}>
                <Typography variant="h4" className={classes.title}>{data.title}</Typography>
                <Button variant="outlined" color="secondary" className={classes.trailer}>View Trailer</Button>
                <Typography variant="body1" className={classes.body}>{data.overview || dataApi.overview }</Typography>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    body: {
        fontWeight: 'lighter',
        textAlign: 'justify',
    },
    trailer: {
        marginBottom: theme.spacing(3),
    },
    contentContainer: {
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    }
}));

export default _MainInfo;