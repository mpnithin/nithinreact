const mysql = require("mysql2");
//var sqlc=require('../routes/conn');

const fooditems =mysql.format({
    // Model attributes are defined here
    fid: {
        type:Number,
        allowNull: false
    },
    cid: {
        type:String,
        allowNull: false
    },
    fname: {
        type: String,
        allowNull: false
    },
    price: {
        type:Number,
        allowNull: false
    }

});
const category = mysql.format({
    // Model attributes are defined here
    cid: {
        type:String
    },
    cname: {
        type: String,
        allowNull: false
    },

});

module.exports = {fooditems,category};






