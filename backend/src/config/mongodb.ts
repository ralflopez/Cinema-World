import mongoose from 'mongoose';

const URI = 'mongodb+srv://passwordmongo:passwordmongo@cluster0.oixjm.mongodb.net/Cinema_World?retryWrites=true&w=majority'

export default async () => {
    const connection = await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('mongoose connected');
    return connection;
}