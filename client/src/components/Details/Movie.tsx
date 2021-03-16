import { Box, Button, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import MainInfo from './_MainInfo';
import Time from './_Time';
import Seat from './_Seat';
import { useState } from 'react';

function Movie() {
    const classes = useStyles();
    const {state: { data }}: any = useLocation();
    const [time, setTime] = useState<string>('');
    const [seats, setSeats] = useState<boolean[]>(data.seats);

    console.log(data);

    return (
        <Box className={classes.container}>
            <MainInfo data={data}/>
            {data.time && <Time 
                        data={data.time} 
                        time={time} 
                        setTime={setTime}
            /> }
            {data.seats && <Seat
                        data={data.seats}
                        seats={seats}
                        setSeats={setSeats}
            /> }
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