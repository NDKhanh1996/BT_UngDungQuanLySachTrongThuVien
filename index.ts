import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { router } from './src/router/router';

const app = express();
const port = 8080;

const DB_URL = 'mongodb://127.0.0.1:27017/Library';
mongoose.connect(DB_URL).then(() => { console.log('DB connection established') }).catch(() => { console.log('DB connection failed') });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => { console.log('Server is running on port ' + port) });