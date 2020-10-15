const category = require('./category');
const users = require('./users');
const news = require('./news');


const routers = [
    ...users,
    ...category,
    ...news
];

const router = (app) => {
    app.use(routers)
};

module.exports=router;