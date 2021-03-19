import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import joi, { StringRegexOptions } from 'joi';
import mongoose from 'mongoose';
import { login as loginValidation, signup as signupValidation } from './validationSchema';
import Users from '../../schema/Users';
import hash from './hash';
import User from '../../schema/Users';
import dotenv from 'dotenv';
import { Router } from 'express';
const router = Router();
dotenv.config();

interface IUserInfo {
    name: string,
    email: string
}

router.post('/signin', async (req, res) => {
    // validate input
    const valid: joi.ValidationResult = loginValidation.validate(req.body);
    if('error' in valid)
        return res.status(400).send({err: 'Invalid Input'});
    
    // check if user exist in database
    const user: any = await Users.findOne({email: req.body.email});
    if(!user)
        return res.send({err: 'User Does Not Exist'});

    //compare pass
    const validPass: boolean = await bcrypt.compare(req.body.password, user.password);
    if(!validPass)
        return res.send({err: "invlid email or password"});
    
    const userInfo: IUserInfo = {
        name: user.name,
        email: user.email,
    }

    const accessToken: string = generateAccessToken(userInfo);

    res.send({
        accessToken,
        userInfo
    });
});

router.post('/signup', async (req, res) => {
    // validate input
    const valid: joi.ValidationResult = signupValidation.validate(req.body);
    if('error' in valid)
        return res.status(400).send({err: 'Invalid Input'});
    
    // check if user exist in database
    const doesExist: any = await Users.findOne({email: req.body.email});
    if(doesExist)
        return res.status(400).send({err: 'User Already Exist'});

    // hash password
    const pass: string = await hash(req.body.password);
    const newUser: mongoose.Document<any> = new User({
        name: req.body.name,
        email: req.body.email,
        password: pass,
        ticket: []
    });

    //save
    try {
        const saved:mongoose.Document<any> = await newUser.save();
        res.status(200).send(saved);
    } catch(err) {
        res.status(500).send({err: err});
    }
});

function generateAccessToken(userInfo: IUserInfo) {
    const secret: string = process.env.ACCESS_SECRET || '';
    return jwt.sign(userInfo, secret, {expiresIn: '7d'});
}

export function authenticateToken(req: any, res: any, next: any) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null)
        return res.sendStatus(401);

    const secret: string = process.env.ACCESS_SECRET || '';
    jwt.verify(token, secret, (err: any, user: any) => {
        if(err)
            return res.statusCode(403);
        
        req.user = user;
        next();
    });
}

export default router;