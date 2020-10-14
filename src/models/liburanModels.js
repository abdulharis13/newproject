const { number } = require("joi");

const addliburanSchema = new mongoose.Schema ({
    nama: String,
    paketLiburan1: {
        harga: number,
    },
    deskripsi: {
        type: String,
        required: true,
    }
});
const Liburan = mongoose.model('Liburan', addliburanSchema);

module.exports = Liburan;