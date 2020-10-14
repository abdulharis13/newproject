const category = require('./category');
const users = require('./users');

const routers = [
    ...users,
    ...category,
];

const router = (app) => {
    app.use(routers)
};

module.exports=router;