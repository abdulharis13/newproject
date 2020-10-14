const express = require('express');
const { Users } = require('../../models');
// const { message } = require('../../schema/users/loginSchema');
// const { addCategorySchema } = require('../../schema');
const router = express.Router();

router.get('/get/users', async (req, res) => {
try {
    const result = await Users.find({}).select("-password"); // berlaku untuk find, findOne
    res.send(result);
    
} catch(e) {
    res.send({ message: e.message });
};
});
module.exports = router;