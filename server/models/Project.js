const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId, // _id
        ref: 'Client' // linking Client model
    }
});

module.exports = mongoose.model('Project', ProjectSchema); 