import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();


app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (reg, res) => {
    res.send('hello to memories API');
})

const port = process.env.port || 5000

mongoose.connect(process.env.connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
.catch((error) => console.log(`${error} did not connect`));



