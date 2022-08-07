const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development' ? true : false
}))

app.listen(port, console.log(`Server runing on port ${port}`));










// MONGO_URI = "mongodb+srv://a_n_u_s_h_k_a:MongoDBSite4@cluster0.z8poenr.mongodb.net/project-manager-db?retryWrites=true&w=majority"