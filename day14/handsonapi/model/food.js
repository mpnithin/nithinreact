const mysql = require("mysql2");
var { Sequelize, DataTypes } = require('sequelize');

// MySQL Connection using Sequelize ORM Module ...

const connection = new Sequelize('food', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }, 
    logging: console.log
  })
    
  connection.authenticate().then(() => {
    console.log('FOOD REST API - CRUD APP: Connection has been established successfully.');
  
  }).catch((err) => {
    console.log('FOOD REST API - CRUD APP: Unable to connect to the database:', err.toString());
  })

  const foods = connection.define('foods', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    food_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    // Other model options go here
    tableName: "foods",
    timestamps: false,

});


const categories = connection.define('categories', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
    tableName: "categories",
    timestamps: false
});


foods.belongsTo(categories,{foreignKey: "category_id"});
// categories.belongsTo(foods);


connection.sync();
module.exports = {foods, categories};



