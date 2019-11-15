const router = require('express').Router();
const verify = require('./verifyToken');
const { categoryValidation } = require('./validation');
const Category = require('../model/category');


//get all category
router.get('/', async (req, res) => {
    try {
        const Categorys = await Category.find();
        res.status(200).json(Categorys);
    } catch (err) {
        res.status(400).send(err)
    }
});


//create category
router.post('/', verify, async (req, res) => {
    //validate data
    const { error } = categoryValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    //creating Category
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
        createdDate: req.body.createdDate
    });
    try {
        const savedCategory = await category.save();
        res.status(200).send(savedCategory);
    } catch (err) {
        res.status(400).send(err);
    }

});

//get category by id
router.get('/:id', async (req, res) => {

    try {
        const category = await Category.find({_id:req.params.id});
        res.send(category);
    }
    catch (err) {
        res.send(err)
    }

});

//delete category by id 
router.delete('/:id', async (req, res) => {
    try {
        const removedCategory = await Category.remove({ _id: req.params.id });
        // res.send(removedCategory.deletedCount);
        // if (removedCategory.deletedCount == 0) return req.status(200).send("Category not found");
        res.status(200).send({ "message": "Category is deleted sucessfully" });
    }
    catch (err) {
        res.send(err)
    }
});


//update category by id
router.patch('/:id', async (req, res) => {
    try {
        const updatedCategory = await Category.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,                   
                }
            }
        );
        res.status(200).send({ "message": "Category is updated sucessfully" });
    }
    catch (err) {
        res.send(err)
    }
});

module.exports = router;