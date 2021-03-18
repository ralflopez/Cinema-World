import { Grid } from '@material-ui/core';
import { useContext } from 'react';
import AuthScreen from './_AuthScreen';
import { UserContext } from '../../context/UserProvider';
import Profile from './_Profile';

function MyMovieScreen() {
    const { user } = useContext(UserContext);
    
    return (
        <Grid container justify="center">
            <Grid item xs={10} md={6}>
                {
                    user.email === ''
                    ? (<AuthScreen />)
                    : (<Profile />)
                }
            </Grid>
        </Grid>
    );
}

export default MyMovieScreen;