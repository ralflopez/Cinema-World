import { Router } from 'express';
import Ticket from '../../schema/Ticket';
const router = Router();

router.post('/insert', (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        newTicket.save();

        res.send(newTicket);
    } catch(err) {
        res.send(err);
    }
});