
import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import connectDB from './config/connectDB.js';
import Routes from './routes/web.js';
import dotenv from 'dotenv';



dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
Routes(app);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

httpServer.listen(2000,()=>{
    console.log('server at http:/localhost:2000')
}); 