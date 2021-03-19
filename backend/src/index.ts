import express from 'express';
import mongoConfig from './config/mongodb';
import moviesAPI from './route/api/movies';
import userAuth from './route/auth/auth';
import crudRoute from './route/crud/crud';
import Movie from './schema/Movie';

// config
const app = express();
mongoConfig();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api', moviesAPI);
app.use('/auth', userAuth);
app.use('/crud', crudRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server running at port ' + PORT);
}); 