import { Box, Button, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import MainInfo from './_MainInfo';
import Time from './_Time';
import Seat from './_Seat';

function Movie() {
    const classes = useStyles();
    const {state: { data }}: any = useLocation();

    console.log(data);

    return (
        <Box className={classes.container}>
            <MainInfo data={data}/>
            <Time />
            <Seat />
            <Button variant="contained" color="primary" size="large">Buy</Button>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: '700px',
        margin: '0 auto',
        marginBottom: theme.spacing(5)
    }
}));



export default Movie;