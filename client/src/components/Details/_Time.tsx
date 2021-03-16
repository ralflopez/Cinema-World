import { Button, Box, Typography, makeStyles } from '@material-ui/core';

interface ITimeObject {
    time: string,
    cinema: string | number
}

interface ITime {
    data: Array<ITimeObject>,
    time: string,
    setTime: any
}

function _Time({ data, time, setTime }: ITime) {
    const classes = useStyles();

    const handleTimeSelect = (time: string) => {
        setTime(time);
    }

    return (
        <Box mb={5}>
            <Typography variant="h5" className={classes.title}>Time</Typography>
            <div>
                {
                    data.map((timeObj: ITimeObject) => (
                        <Button 
                        variant="contained" 
                        onClick={() => handleTimeSelect(timeObj.time)}
                        className={`${classes.timeBtn} ${time === timeObj.time ? classes.timeActive : ''}`}>
                            {timeObj.time}
                        </Button>
                    ))
                }
            </div>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(2)
    },
    timeBtn: {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    },
    timeActive: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default _Time;