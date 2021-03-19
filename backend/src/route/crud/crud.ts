import { Router } from 'express';
import { authenticateToken } from '../auth/auth';
import Movie from '../../schema/Movie';
import Ticket from '../../schema/Ticket';
const router = Router();

router.post('/insert', authenticateToken, async (req, res) => { 
    try {
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

router.get('/readticket', authenticateToken, async (req, res) => {
    try {
        const tickets = await Ticket.find({buyerEmail: req.query.email});
        res.status(200).send(tickets);
    } catch(err) {
        res.status(500).send(err);
    }
});

export default router;