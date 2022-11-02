// imports
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
// config vars
const PORT = process.env.PORT || 4000;
const DB = process.env.DB || 'mongodb://127.0.0.1/g2';
// connect database
mongoose.connect(DB)
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.error(err));
// create app
const app = express();
// message model
const MessageSchema = new mongoose.Schema({
    msg: String,
    timestamp: { type: Date, default: Date.now }
  });