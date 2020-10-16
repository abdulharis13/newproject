const express = require('express');
const mongoose = require('mongoose');
const { News, Category, Users } = require('../../models');
// const { message } = require('../../schema/users/loginSchema');
const { addNewsSchema } = require('../../schema');
const router = express.Router();

router.post('/add/news', async (req, res) => {
try {
    const { error, value } = addNewsSchema.validate(req.body);
    if (error) {
        throw new Error(error.message);
    };
    const { judul, content, author, category } = value;
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
        throw new Error('category tidak valid');
    }
    const news = new News({
        judul, 
        content,
        author, 
        category
    });
    await news.save();
    res.send(news);

} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;


//how to pull and push vscode to github