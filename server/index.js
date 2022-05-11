import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js'

const app = express();

app.use('./posts', postRoutes);

app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://memories2022:itrex2022@cluster0.adarl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));


app.get('/', (req, res) =>{
    res.send('Welcome')

})

