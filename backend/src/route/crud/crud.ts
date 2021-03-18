import { Router } from 'express';
import Movie from '../../schema/Movie';
import Ticket from '../../schema/Ticket';
const router = Router();

router.post('/insert', async (req, res) => { 
    try {
        console.log(req.body)
        const newTicket = new Ticket(req.body.ticket);
        await newTicket.save();

        const query = {
            title: req.body.ticket.title,
            year: req.body.ticket.year,
            'time.time': req.body.ticket.time
        };

        const update = {
            '$set': {
                'time.$.seats': req.body.seats
            }
        }
        await Movie.updateOne(query, update);
        console.log('done updating');
        res.send(newTicket);
    } catch(err) {
        console.log('err');
        res.send(err);
    }
});

export default router;