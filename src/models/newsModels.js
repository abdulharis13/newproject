const mongoose = require('mongoose');
const addNewSchema = new mongoose.Schema ({
    judul: {
        type: String,
        minlength: 5,
        maxlentgh: 50,
        required: true
    },
    content: {
        type: String,
        minlength: 20,
        maxlentgh: 100,
        required: true
    },
    author: String,
    category: String
});
const News = mongoose.model('News', addNewSchema);

module.exports = News;