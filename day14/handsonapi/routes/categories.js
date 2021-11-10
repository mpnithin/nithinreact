const express = require("express");
const router = express.Router();
const alldetails = require("../model/food");



/* Router to LIST food category details from the MySQL database. */
router.get('/list', async (req, res) => {

    const category = await alldetails.categories.findAll()

    console.log("Food Categorie(s):", JSON.stringify(category, null, 2));

    res.send({ "Food Categorie(s)": category }); // true


});

// getting a food categories by id

router.get('/list/:categoryid', async (req, res) => {
    try {
        const category = await alldetails.categories.findOne({where:{id: req.params.categoryid}});
        res.json(category);
    } catch (err) { res.json({ message: err }); }
})
// create a category

router.post('/add', (req, res) => {
    const category = new alldetails.categories({
        category_name: req.body.category_name
    });
    category.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
});

// deleting a category

router.delete('/delete/:categoryid', async (req, res) => {
    try {

        const category = await alldetails.categories.destroy({ where: { id: req.params.categoryid } });
        res.json(category);
    } catch (err) {

        res.json({ message: err });
    }
});

// updating a category by id

router.patch('/update/:categoryid', async (req, res) => {
    try {
        const category = await alldetails.categories.update({ category_name: req.body.category_name },
            {where:{id:req.params.categoryid}});
        res.json(category);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;