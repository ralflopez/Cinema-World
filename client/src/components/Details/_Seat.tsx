import { Button, Box, Typography, makeStyles } from '@material-ui/core';

function _Time() {
    const classes = useStyles();
    return (
        <Box mb={5}>
            <Typography variant="h5" className={classes.title}>Seat</Typography>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    {
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(btn => <Button variant="contained" className={classes.seat}></Button>)
                    }
                </div>
                <div className={classes.grid}>
                    {
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(btn => <Button variant="contained" className={classes.seat}></Button>)
                    }
                </div>
                <div className={classes.grid}>
                    {
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(btn => <Button variant="contained" className={classes.seat}></Button>)
                    }
                </div>
            </div>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(2)
    },
    seat: {
        minWidth: '30px',
        maxWidth: '30px',
        minHeight: '30px',
        maxHeight: '30px',
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        },
    },
    gridContainer: {
        display: 'inline-grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '20px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    },
    grid: {
        display: 'grid',
        gridTemplateRows: 'repeat(6, 1fr)',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '7px',
        justifyContent: 'start'
    }
}));

export default _Time;