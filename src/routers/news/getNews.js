const express = require('express');
const { News, Users, Category } = require('../../models');
// const category = require('../../schema/category');
// const { message } = require('../../schema/users/loginSchema');
// const { addCategorySchema } = require('../../schema');
const router = express.Router();

const getData = async (id, model) => {
    const result = await model.findById(id).select('-password') 
    return result;
}
router.get('/get/news', async (req, res) => {
try {
    const result = await News.find({}); // mencari keseluruhan data pada news
    const promises = await Promise.all(result.map(async el => { // map sama juga dengan foreach dan dipakai ketika menggunakan promise dan harus pakai return
        return {
            judul: el.judul,
            content: el.content,
            author: await getData(el.author, Users), // mengolah data dari id dan  model user
            category: await getData(el.author, Category)
        }
    }))
    res.send(promises);
} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;

//gunakan looping
// promise all javascript
// how to request parameter, 
// how to use middleware