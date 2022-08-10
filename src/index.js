// this code for init node.js project also to interact with nodemon and
// babel and use npm start. and also how to install enveronement variables and use them on file.js
/*
*
*
*
import 'dotenv/config';
import {saySomthing} from './my-other-file.js';

console.log('hello node.js project.');
console.log(process.env.MY_SECRET);
console.log('from other file ' + saySomthing());
*
*
*
*/

import 'dotenv/config';
import cors from 'cors';
import express from "express";

const app = express();

app.use(cors());

app.get('/exemple', (req,res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, ()=> 
    console.log(`Exemple app listening on port ${process.env.PORT}!`),
);