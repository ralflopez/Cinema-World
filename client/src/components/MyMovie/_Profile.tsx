import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserProvider';

function _Profile() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        axios.post('/crud/insert', {email: user.email})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, []);

    const handleLogOut = () => {
        setUser({name: '', email: ''});
    }

    return (
        <div>
            <Typography variant="h2">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Button variant="outlined" color="primary" onClick={handleLogOut}>Log Out</Button>
        </div>
    );
}

export default _Profile;