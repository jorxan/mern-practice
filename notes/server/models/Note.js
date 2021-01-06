const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: false
    }
})

const NoteModel = mongoose.model('notes', NoteSchema);

module.exports = NoteModel