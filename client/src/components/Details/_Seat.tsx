import { Button, Box, Typography, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';

interface ISeat {
    data: boolean[],
    seats: boolean[],
    setSeats: any
}

function _Seat({ data, seats, setSeats }: ISeat) {
    const classes = useStyles();
    const [active, setActive] = useState<number|null>(null);
    
    const handleSeatSelect = (index: number) => {
        if(seats[index] && index !== active) return;

        setSeats((seats: boolean[]) => {
            let newSeats = [...seats];
            if(active !== null) {
                newSeats[active] = false;
            }
            newSeats[index] = true;
            setActive(index);

            return newSeats;
        });
    }

    useEffect(() => console.log(active), [active]);

    return (
        <Box mb={5}>
            <Typography variant="h5" className={classes.title}>Seat</Typography>
            <div className={classes.gridContainer}>
                <div className={classes.grid}>
                    {
                        seats.slice(0,18).map((seat: boolean, index: number) => (
                            <Button 
                            variant="contained" 
                            className={`${classes.seat} ${seat ? classes.seatActive : ''}`}
                            onClick={() => handleSeatSelect(index)} 
                            key={index}>
                            </Button>
                        ))
                    }
                </div>
                <div className={classes.grid}>
                    {
                        seats.slice(18,36).map((seat: boolean, index: number) => (
                            <Button variant="contained" 
                            className={`${classes.seat} ${seat ? classes.seatActive : ''}`}
                            onClick={() => handleSeatSelect(index+18)} 
                            key={index+18}>
                            </Button>
                        ))
                    }
                </div>
                <div className={classes.grid}>
                    {
                        seats.slice(36,54).map((seat: boolean, index: number) => (
                            <Button 
                            variant="contained" 
                            className={`${classes.seat} ${seat ? classes.seatActive : ''}`} 
                            onClick={() => handleSeatSelect(index+36)} 
                            key={index+36}
                            ></Button>
                        ))
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
    seatActive: {
        backgroundColor: theme.palette.primary.main
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

export default _Seat;