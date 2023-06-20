import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as path from 'path';
import { Request, Response } from 'express';

import router from './routes';
dotenv.config();

const app = express();

const MONGO_URL = process.env.MONGO_URL;

const dbConnect = async() =>{
    try {
        await mongoose.connect(MONGO_URL, {
          dbName: 'agricco',
        });
        console.log('DB connected')
    } catch (error) {
        console.log(error.message);
    }
}

dbConnect();

app.use(cors({
  origin: "*"
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/testing', (req: Request, res: Response) =>{
  res.status(200).render('testing', { user: 'Ayobami' });

})

app.use('/api', router);

export default app;