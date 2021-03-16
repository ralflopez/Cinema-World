import express from 'express';
import mongoConfig from './config/mongodb';
import moviesAPI from './route/api/movies';

// config
const app = express();
// let arrSize = 54;
// let seats = [];
// while(arrSize--) {
//     seats.push(false);
// }

// const a = [{
//     title: 'Raya and the Last Dragon',
//     year: 2021,
//     poster_url: 'https://image.tmdb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
//     time: [
//         { time: '9:00 AM', cinema: 'A'},
//         { time: '11:00 AM', cinema: 'A'},
//         { time: '2:00 PM', cinema: 'A'},
//         { time: '4:00 PM', cinema: 'A'},
//         { time: '6:00 PM', cinema: 'A'}
//     ],
//     seats: seats
// }];
// const b = [{
//     title: 'Tom & Jerry',
//     year: 2021,
//     poster_url: 'https://image.tmdb.org/t/p/original/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg',
//     time: [
//         { time: '9:00 AM', cinema: 'B'},
//         { time: '11:00 AM', cinema: 'B'},
//         { time: '2:00 PM', cinema: 'B'},
//         { time: '4:00 PM', cinema: 'B'},
//         { time: '6:00 PM', cinema: 'B'}
//     ],
//     seats: seats
// }];

// const c = [{
//     title: 'Monster Hunter',
//     year: 2021,
//     poster_url: 'https://image.tmdb.org/t/p/original/z8TvnEVRenMSTemxYZwLGqFofgF.jpg',
//     time: [
//         { time: '9:00 AM', cinema: 'C'},
//         { time: '11:00 AM', cinema: 'C'},
//         { time: '2:00 PM', cinema: 'C'},
//         { time: '4:00 PM', cinema: 'C'},
//         { time: '6:00 PM', cinema: 'C'}
//     ],
//     seats: seats
// }];

// const d = [{
//     title: 'Wonder Woman 1984',
//     year: 2021,
//     poster_url: 'https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
//     time: [
//         { time: '9:00 AM', cinema: 'D'},
//         { time: '11:00 AM', cinema: 'D'},
//         { time: '2:00 PM', cinema: 'D'},
//         { time: '4:00 PM', cinema: 'D'},
//         { time: '6:00 PM', cinema: 'D'}
//     ],
//     seats: seats
// }];

// const e = [{
//     title: 'The Little Things',
//     year: 2021,
//     poster_url: 'https://image.tmdb.org/t/p/original/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
//     time: [
//         { time: '9:00 AM', cinema: 'E'},
//         { time: '11:00 AM', cinema: 'E'},
//         { time: '2:00 PM', cinema: 'E'},
//         { time: '4:00 PM', cinema: 'E'},
//         { time: '6:00 PM', cinema: 'E'}
//     ],
//     seats: seats
// }];
mongoConfig();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api', moviesAPI);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server running at port ' + PORT);
}); 