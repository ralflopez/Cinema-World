import { Router } from 'express';
const router = Router();
import jwt from 'jsonwebtoken';

const posts = [
    {name: '1', content: 'this is 1'},
    {name: '2', content: 'this is 2'}
]

let refreshTokenArr = [];

router.get('/posts', authenticateToken, (req, res) => {
    console.log(req.user);
    res.json(posts );
});

router.post('/login', (req, res) => {
    const username = req.body.username;

    const user = {name: username};

    const accessToken = generateAccessToken(user);

    const refreshToken = jwt.sign(user, 'REFRESHHH');
    refreshTokenArr.push(refreshToken);

    res.json({ 
        accessToken: accessToken,
        refreshToken: refreshToken
    });

});

router.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null)
        return res.sendStatus(401);
    if(!refreshTokenArr.includes(refreshToken))
        return res.sendStatus(403);
    
    jwt.verify(refreshToken, 'REFRESHHH', (err, user) => {
        if(err)
            return res.sendStatus(403);
        const accessToken = generateAccessToken({name: user.name});
        res.json({ accessToken: accessToken });
    })
});

function generateAccessToken(user) {
    return jwt.sign(user, 'SDFASFFASD', {expiresIn: '7d'});
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null)
        return res.sendStatus(401);

    jwt.verify(token, 'SDFASFFASD', (err, user) => {
        if(err)
            return res.statusCode(403);
        
        req.user = user;
        next();
    });
}

export default router;