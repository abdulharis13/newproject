const express = require('express');
const { Users } = require('../../models');
const { loginSchema } = require('../../schema');
const router = express.Router();

router.post('/users/login', async (req, res) => {
    
    try {
    const { error, value } = loginSchema.validate(req.body);
    const { email, password } = value;
    if (error) {
        throw new Error (error.message);
    };
        let user = await Users.findOne({email, password}).select("-password")
        if (!user) {
            throw new Error('Username / Password tidak valid')
        }
        res.send(user);
    }catch(e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA
module.exports = router; // agar file dapat diakses dari luar wajib ada di setiap file.js
