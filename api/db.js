const { Sequelize } = require('sequelize');
// Database connection
const sequelize = new Sequelize('ecommerce_api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

// Importing models
const Menu = require('./models/Menu');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');
const Contact = require('./models/Contact');

// Getting models
const models = [
    Menu,
    Review,
    User,
    Order,
    Contact,
];

// Registering models into Sequelize
for (let model of models) {
    model(sequelize);
}

//configuración de relación
const { menus, reviews, users, orders, contacts } = sequelize.models
reviews.belongsTo(menus) // Relation one-to-one in rewies table
orders.belongsTo(users)
orders.belongsTo(menus)
contacts.belongsTo(users)



module.exports = sequelize;