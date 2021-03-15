import express from 'express';
const app = express();
import mongoConfig from './config/mongodb';

// config
mongoConfig();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server running at port ' + PORT);
}); 