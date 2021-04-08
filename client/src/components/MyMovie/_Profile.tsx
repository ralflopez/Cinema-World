import { Box, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserProvider';

function _Profile() {
    const { user, setUser, token } = useContext(UserContext);
    const [ticket, setTicket] = useState([]);

    
    const load = () => {
        axios.get(`/crud/readticket?email=${user.email}`, {
            // headers: {
            //     authorization: 'Bearer ' + token
            // }
        })
        .then((res: any) => setTicket(res.data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        load();    
    }, []);

    const handleLogOut = () => {
        setUser({name: '', email: ''});
    }

    const handleDeleteTicket = (title: string, seat: number, time: string) => {
        axios.delete('/crud/delete', {
            data: {
                title: title,
                seat: seat,
                time: time,
                buyerEmail: user.email 
            },
            // headers: {
            //     authorization: 'Bearer ' + token
            // }
        })
        .then(res => {
            if(res.data) {
                load();
            }
        })
    }

    return (
        <div>
            <Typography variant="h2">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Box mt={3} mb={3}>
                <Button variant="outlined" color="primary" onClick={handleLogOut}>Log Out</Button>
            </Box>
            <Typography variant="h5">My Movies</Typography>
            {
                ticket.map((t:any) => (
                    <Box mt={2} mb={3}>
                        <Typography variant="h4">{t.title}</Typography>
                        <Typography variant="body1" color="primary">{t.time} -- {t.cinema}</Typography>
                        <Button color="secondary" variant="text" onClick={() => handleDeleteTicket(t.title, t.seat, t.time)}>Delete</Button>
                    </Box>
                ))
            }
        </div>
    );
}

export default _Profile;