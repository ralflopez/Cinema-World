import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';

function MyMovieScreen() {
    const classes = useStyles();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    const signIn = () => {
        // axios.post('/auth/signin', {});
    }

    const handleChangeOption = () => {
        setIsSignUp(s => !s);
    }

    return (
        <Grid container justify="center">
            <Grid item xs={10} md={6}>
                <form autoComplete="off" className={classes.form}>
                    <Typography variant="h4" className={classes.btn}>Login</Typography>
                    {
                        isSignUp && (
                            <>
                            <TextField 
                                id="" 
                                label="Name"
                                InputLabelProps={{style: {color: 'white'}}}
                                className={classes.txtinput}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            </>
                        )
                    }
                    <TextField 
                        id="" 
                        label="Email"
                        InputLabelProps={{style: {color: 'white'}}}
                        className={classes.txtinput}
                        value={name}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        id="" 
                        label="Password"
                        InputLabelProps={{className: classes.label}}
                        className={classes.txtinput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" className={classes.btn} onClick={handleChangeOption}>
                        {isSignUp ? 'Sign Up' : 'Log in'}
                    </Button>
                    <Button variant="text" color="primary" onClick={handleChangeOption}>
                        {isSignUp ? 'I already have an account' : 'Create an account'}
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    btn: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    txtinput: {
        marginBottom: theme.spacing(2),
        // borderBottom: '2px solid white'
    },
    label: {
        color: 'white',
        '&::before': {
            backgroundColor: 'blue'
        }
    }
}));

export default MyMovieScreen;