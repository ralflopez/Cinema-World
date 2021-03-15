import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Poster from '../Home/_Poster';

function _MainInfo({data}: any) {
    const classes = useStyles();
    return (
        <Box display="flex" className={classes.container}>
            <Poster data={data} noHover={true}/>
            <Box className={classes.contentContainer}>
                <Typography variant="h4" className={classes.title}>{data.title}</Typography>
                <Button variant="outlined" color="secondary" className={classes.trailer}>View Trailer</Button>
                <Typography variant="body1" className={classes.body}>{data.overview}</Typography>
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