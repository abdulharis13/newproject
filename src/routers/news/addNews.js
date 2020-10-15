const express = require('express');
const mongoose = require('mongoose');
const { News, Category, Users } = require('../../models');
// const { message } = require('../../schema/users/loginSchema');
const { addNewsSchema } = require('../../schema');
const router = express.Router();

router.post('/add/news', async (req, res) => {
try {
    const { error, value } = addNewsSchema.validate(req.body);
    const { judul, content, author, category } = value;
    if (error) {
        throw new Error(error.message);
    };
    const user = await Users.findOne({
        _id: mongoose.Types.ObjectId(author)
    });
    if (!user) {
        throw new Error('user tidak valid');
    }
    const categori = await Category.findOne({
        _id: mongoose.
        Types.ObjectId(category)
    });
    if (!categori) {
        throw new Error('user tidak valid');
    }
    const news = new News({
        judul, 
        content,
        author, 
        category
    });
    const result = await news.save();
    res.send(result);

} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;