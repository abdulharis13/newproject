const express = require('express');
const { Users } = require('../../models');
const { authenticator } = require('../../middleware')

const router = express.Router();

router.get('/get/users', authenticator, async (req, res) => {
try {
    const result = await Users.find({}); // berlaku untuk find, findOne
    res.send(result);
    
} catch(e) {
    res.send({ message: e.message });
};
});
module.exports = router;