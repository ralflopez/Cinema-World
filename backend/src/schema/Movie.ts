import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    year: {
        type: Number
    },
    poster_url: {
        type: String
    },
    time: {
        required: true,
        type: Array,
    },
    seats: {
        requried: true,
        type: Array
    },
    isNowSowing: {
        type: Boolean
    }
});

const Movie = mongoose.model('movie', MovieSchema);
export default Movie;