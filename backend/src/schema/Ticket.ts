import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    title: String,
    time: String,
    cinema: String,
    seat: Number,
    buyerName: String,
    buyerEmail: String,
});

export default mongoose.model('ticket', TicketSchema);