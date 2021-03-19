import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import MainInfo from './_MainInfo';
import Time from './_Time';
import Seat from './_Seat';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import axios from 'axios';

interface ITicket {
    title: string,
    year: number,
    time: string,
    cinema: string,
    seat: number | null,
    buyerName: string,
    buyerEmail: string,
}

function Movie() {
    const { user, token } = useContext(UserContext);
    const classes = useStyles();
    const history = useHistory();
    const {state: { data }}: any = useLocation();
    const [time, setTime] = useState<string>(data.time ? data.time[0].time : '');
    const [seats, setSeats] = useState<boolean[]>([]);
    const [active, setActive] = useState<number|null>(null);

    useEffect(() => {
        if(time === '') return;
    
        setSeats(() => {
            const i = data.time.findIndex((d: any) => d.time === time);
            return data.time[i].seats;
        });
    }, [time, data]);

    const handleBuy = () => {
        if(user.email === '')
            return history.push('/mymovie');
        
        if(active == null) return;

        const timeI = data.time.findIndex((d: any) => d.time === time);
        const ticketInfo: ITicket = {
            title: data.title,
            year: data.year,
            time: time,
            cinema: data.time[timeI].cinema,
            seat: active as number + 1,
            buyerName: user.name,
            buyerEmail: user.email
        }

        const body = {
            ticket: ticketInfo,
            seats: seats,
        };

        // console.log(ticketInfo);
        axios.post('/crud/insert', body, {
            headers: {
                authorization: 'Bearer ' + token
            }
        })
        .then(() => history.push('/mymovie'))
        .catch(() => alert('Unable to Process Order'));
    }

    return (
        <Box className={classes.container}>
            <MainInfo data={data}/>
            {data.time && <Time 
                        data={data.time} 
                        time={time} 
                        setTime={setTime}
            /> }
            {data.seats && (
                        <>
                            <Seat
                                seats={seats}
                                setSeats={setSeats}
                                active={active}
                                setActive={setActive}
                            />
                            <Button variant="contained" color="primary" size="large" onClick={handleBuy}>Buy</Button>
                        </>

            ) }
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