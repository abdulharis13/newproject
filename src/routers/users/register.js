const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { privateKey } = require('../../../config')


const { Users } = require('../../models');
const { registerSchema } = require('../../schema');
const router = express.Router();

router.post('/users/register', async (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            username,
            namalengkap,
            email,
            password
        } = value;

        const user = new Users({
            username,
            namalengkap,
            email,
            password: bcrypt.hashSync(password, salt)
        });
        await user.save();

        let response = { ...user._doc };
        delete response.password;

        const token = jwt.sign(response, privateKey);
        res.send({ ...response, token });

    } catch (e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA
module.exports = router; // agar file dapat diakses dari luar wajib ada di setiap file.js


// membuat login pr
// bikin router, bikin schema, 
// balikan username, namalengkap, email  
