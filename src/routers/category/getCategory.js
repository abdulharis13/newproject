const express = require('express');
const { Category } = require('../../models');
// const { message } = require('../../schema/users/loginSchema');
// const { addCategorySchema } = require('../../schema');
const router = express.Router();

router.get('/get/category', async (req, res) => {
try {
    const result = await Category.find({});
    res.send(result);
    
} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;