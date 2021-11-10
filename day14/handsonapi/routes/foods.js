const express = require("express");
const router = express.Router();
const alldetails = require("../model/food");



/* Router to LIST food details along with its category from the MySQL database. */
router.get('/listdetails', async (req, res) => {

    const foods = await alldetails.foods.findAll({
        include: [alldetails.categories]
    })

    console.log("Food item Detail(s):", JSON.stringify(foods, null, 2));

    res.send({ "Food item Detail(s)": foods }); // true


});
/* Router to LIST food details */
router.get('/list', async (req, res) => {

    const foods = await alldetails.foods.findAll()

    console.log("Food Item(s):", JSON.stringify(foods, null, 2));

    res.send({ "Food Item(s)": foods }); // true


});


// getting a food by id

router.get('/list/:foodid', async (req, res) => {
    try {
        const food = await alldetails.foods.findOne({ where: { id: req.params.foodid } });
        res.json(food);
    } catch (err) { res.json({ message: err }); }
})

// create a food item 

router.post('/add/', (req, res) => {
    const food = new alldetails.foods({
        food_name: req.body.food_name,
        quantity: req.body.quantity,
        price: req.body.price,
        category_id: req.body.category_id

    });
    food.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
});

// deleting a food

router.delete('/delete/:foodid', async (req, res) => {
    try {
        const food = await alldetails.foods.destroy({ where: { id: req.params.foodid } });
        res.json(food);
    } catch (err) {
        res.json({ message: err });
    }
});


// updating a food by id

router.patch('/update/:foodid', async (req, res) => {
    try {
        const food = await alldetails.foods.update({
            food_name: req.body.food_name,
            quantity: req.body.quantity,
            price: req.body.price,
            category_id: req.body.category_id
        },
            { where: { id: req.params.foodid } });
        res.json(food);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
