const express = require('express');
const { News } = require('../../models');
// const { message } = require('../../schema/users/loginSchema');
// const { addCategorySchema } = require('../../schema');
const router = express.Router();

router.get('/get/news', async (req, res) => {
try {
    const result = await News.find({});
    res.send(result);
    
} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;

//gunakan looping
// promise all javascript