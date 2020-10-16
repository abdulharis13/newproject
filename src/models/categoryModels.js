const mongoose = require('mongoose');
const addCategorySchema = new mongoose.Schema ({
    namaCategory: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    }
});
const Category = mongoose.model('Category', addCategorySchema);

module.exports = Category;