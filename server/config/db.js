const mongoose = require('mongoose');
require('dotenv').config();

const db = 'mongodb+srv://a_n_u_s_h_k_a:MongoDBSite4@cluster0.xad3sq9.mongodb.net/project_manager_db?retryWrites=true&w=majority';

const connectDB = async () => {
    try { 
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected');
    }
    catch(err) { console.log(err); }
}

module.exports = connectDB;