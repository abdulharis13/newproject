const express = require('express');
const { Category } = require('../../models');
const { addCategorySchema } = require('../../schema');
const router = express.Router();

router.post('/add/category', async (req, res) => {

    try {
        const { error, value } = addCategorySchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            namaCategory,
            deskripsi,
        } = value;

        const category = new Category({
            namaCategory,
            deskripsi
        });
        await category.save();
        res.send({ namaCategory, deskripsi });
    } catch (e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA

module.exports = router;