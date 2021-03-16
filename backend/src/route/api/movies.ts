import { Router } from 'express';
import Movie from '../../schema/Movie';
const router = Router();

router.get('/now_showing', async (req, res) => {
    try {
        const nowShowing = await Movie.find({ isNowShowing: true });
        res.status(200).send(nowShowing);
    } catch(er) {
        res.status(500).send(er);
    }
});

// router.post('/set_ticket', async (req, res) => {
//     Movie.
// });

export default router;