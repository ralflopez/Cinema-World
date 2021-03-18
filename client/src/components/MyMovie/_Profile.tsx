import { Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';

function _Profile() {
    const { user, setUser } = useContext(UserContext);

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