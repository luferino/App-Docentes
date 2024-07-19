import session from 'express-session';
import {SESSION_SECRET, NODE_ENV} from './variables.js';

const sessionConfig = {
    secret:SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {secure: NODE_ENV === 'production'}
}

export default sessionConfig;