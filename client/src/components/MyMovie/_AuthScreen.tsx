import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState, useContext, useReducer } from 'react';
import { UserContext } from '../../context/UserProvider';
import axios, { AxiosResponse } from 'axios';
import { Redirect } from 'react-router-dom';

interface IForm {
    name: string,
    email: string,
    password: string,
    error: string
}

const form_init: IForm = {
    name: '',
    email: '',
    password: '',
    error: ''
}

const reducer = (state: any, action: any): void => {
    switch(action.type) {
        case 'NAME': return {...state, name: action.payload.value};
        case 'EMAIL': return {...state, email: action.payload.value};
        case 'PASSWORD': return {...state, password: action.payload.value};
        default: return {...state}
    }
}

function _AuthScreen() {
    const { user, setUser, setToken } = useContext(UserContext);
    const classes = useStyles();

    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [err, setErr] = useState<string>('');
    const [form, dispatchForm] = useReducer<(state: any, action: any) => any>(reducer, form_init as any);

    const signIn = () => {
        axios.post('/auth/signin', {
            email: form.email, 
            password: form.password
        })
        .then((res: AxiosResponse | any) => {
            if('err' in res.data)
                setErr(res.data.err);
            else {
                setToken(res.data.accessToken);
                setUser(res.data.userInfo);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    const signUp = async () => {
        console.log('signup')
        axios.post('/auth/signup', {
            name: form.name,
            email: form.email, 
            password: form.password
        })
        .then((res: AxiosResponse | any) => {
            console.log(res);
            if('err' in res.data)
                setErr(res.data.err);
            else
                setIsSignUp(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleChangeOption = () => {
        setIsSignUp(s => !s);
    }

    const handleForm = (type: string, value: string) => {
        dispatchForm({
            type: type,
            payload: {
                value: value
            }
        });
    }

    if(user.email !== '')
        return (<Redirect to="/" />)

    return (
        <form autoComplete="off" className={classes.form}>
                    <Typography variant="h4" className={classes.btn}>
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </Typography>
                    <Typography variant="body1" color="primary">{err !== '' && err}</Typography>
                    {
                        isSignUp && (
                            <>
                            <TextField 
                                id="name" 
                                label="Name"
                                InputLabelProps={{style: {color: 'white'}}}
                                className={classes.txtinput}
                                value={form.name}
                                onChange={(e) => handleForm('NAME', e.target.value)}
                            />
                            </>
                        )
                    }
                    <TextField 
                        id="email" 
                        label="Email"
                        InputLabelProps={{style: {color: 'white'}}}
                        className={classes.txtinput}
                        value={form.email}
                        onChange={(e) => handleForm('EMAIL', e.target.value)}
                        type="email"
                    />
                    <TextField 
                        id="password" 
                        label="Password"
                        InputLabelProps={{className: classes.label}}
                        className={classes.txtinput}
                        value={form.password}
                        onChange={(e) => handleForm('PASSWORD', e.target.value)}
                        type="password"
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.btn} 
                        onClick={isSignUp ? signUp : signIn}
                    >
                        {isSignUp ? 'Sign Up' : 'Log in'}
                    </Button>
                    <Button variant="text" color="primary" onClick={handleChangeOption}>
                        {isSignUp ? 'I already have an account' : 'Create an account'}
                    </Button>
                </form>
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

export default _AuthScreen;