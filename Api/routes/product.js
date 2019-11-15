const router = require('express').Router();
const verify = require('./verifyToken');
const { productValidation } = require('./validation');
const Product = require('../model/product');


//get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).send(err)
    }
});

//get All Product by category
router.post('/ByCategory', async (req, res) => {
    try {
        const products = await Product.find().where({category:req.body.name});
        res.status(200).json(products);
    } catch (err) {
        res.status(400).send(err)
    }
});


//create product
router.post('/',  async (req, res) => {
    //validate data
    const { error } = productValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    //creating product
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        createdBy: req.body.createdBy,
        img: req.body.img,
        isActive: req.body.isActive,
        createdDate: req.body.createdDate
    });
    try {
        const savedProuduct = await product.save();
        res.status(200).send(savedProuduct);
    } catch (err) {
        res.status(400).send(err);
    }

});

//get product by id
router.get('/:id', async (req, res) => {

    try {
        const product = await Product.find({_id:req.params.id});
        res.send(product);
    }
    catch (err) {
        res.send(err)
    }

});

//delete product by id 
router.delete('/:id', async (req, res) => {
    try {
        const removedProduct = await Product.remove({ _id: req.params.id });
        // res.send(removedProduct.deletedCount);
        // if (removedProduct.deletedCount == 0) return req.status(200).send("product not found");
        res.status(200).send({ "message": "Product is deleted sucessfully" });
    }
    catch (err) {
        res.send(err)
    }
});


//update specidfic product by id
router.patch('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category: req.body.category,
                    brand: req.body.brand,                 
                    img: req.body.img,
                    isActive: req.body.isActive,
                    createdDate: req.body.createdDate
                }
            }
        );
        res.status(200).send({ "message": "Product is updated sucessfully" });
    }
    catch (err) {
        res.send(err)
    }
});

module.exports = router;