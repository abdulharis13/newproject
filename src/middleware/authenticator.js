 
const jwt = require('jsonwebtoken')
const { privateKey } = require('../../config')

const authenticator = (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            throw new Error('token tidak valid');
        }
        const decoded = jwt.verify(token, privateKey)
        if (!decoded) {
            throw new Error('token tidak valid');
        } else {
            res.locals.me = decoded;
            next();
        }
    } catch (e) {
    res.send({ message: e.message });
    }
}

module.exports = authenticator;