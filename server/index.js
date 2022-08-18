const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const path = require("path"); 
const port = process.env.PORT || 5000;

const app = express();

// Connect to MongoDB
connectDB();

// Server production assets (frontend)
if(process.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development' ? true : false
}))

app.listen(port, console.log(`Server runing on port ${port}`));