import { Button, Box, Typography, makeStyles } from '@material-ui/core';

function _Time() {
    const classes = useStyles();
    return (
        <Box mb={5}>
            <Typography variant="h5" className={classes.title}>Time</Typography>
            <div>
                <Button variant="contained" className={classes.timeBtn}>7:00 AM</Button>
                <Button variant="contained" className={classes.timeBtn}>7:00 AM</Button>
                <Button variant="contained" className={classes.timeBtn}>7:00 AM</Button>
                <Button variant="contained" className={classes.timeBtn}>7:00 AM</Button>
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
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    }
}));

export default _Time;