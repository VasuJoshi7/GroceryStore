const router = require('express').Router();
const verify = require('./verifyToken');
const { orderVaildation, orderAddressValidate } = require('./validation');
const Order = require('../model/order');


//get all Order
router.get('/', async (req, res) => {
    try {
        const products = await Order.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).send(err)
    }
});


//create Order
router.post('/', async (req, res) => {
    //validate data
    const { error } = orderVaildation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    
    //creating product
    const order = new Order({
        ProductId:req.body.ProductId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        Price: req.body.Price,
        Phone:req.body.Phone,
        Quantity: req.body.Quantity,
        TotalAmount: req.body.TotalAmount,
        createdBy: req.body.createdBy,
        email: req.body.email,
        createdDate: req.body.createdDate
    });
    try {
        const savedOrder = await order.save();
        res.status(200).send(savedOrder);
    } catch (err) {
        res.status(400).send(err);
    }

});

//get Order by id
router.get('/:id', async (req, res) => {

    try {
        const product = await Order.find({ _id: req.params.id });
        res.send(product);
    }
    catch (err) {
        res.send(err)
    }

});

//delete Order by id 
router.delete('/:id', async (req, res) => {
    try {
        const removedOrder = await Order.remove({ _id: req.params.id });
        // res.send(removedOrder.deletedCount);
        // if (removedOrder.deletedCount == 0) return req.status(200).send("product not found");
        res.status(200).send({ "message": "Order is deleted sucessfully" });
    }
    catch (err) {
        res.send(err)
    }
});


//update category by id
router.patch('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.updateOne(
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
        res.status(200).send({ "message": "Order is updated sucessfully" });
    }
    catch (err) {
        res.send(err)
    }
});

module.exports = router;