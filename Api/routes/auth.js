const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidation, loginValidation } = require('../routes/validation');


router.post('/register', async (req, res) => {
    //validate the data before we a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    //checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('email id already registered!');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //crating a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        address: req.body.address,
        isActive: req.body.isActive,
        createdDate: req.body.createdDate,
        role: req.body.role
    });
    try {
        const savedUser = await user.save();
        res.status(200).send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }

});

router.post('/login', async (req, res) => {
    //validate the data before check the user 
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    //checking if the user is already in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({"message":'email or password is wrong'});

    //password id correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send({"message":'email or password is wrong'});

    const emailExist = await User.findOne({ email: req.body.email });

    ///create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).status(200).send({ "token": token ,"role":emailExist.role,"userId":emailExist._id});

});

router.get('/users', async (req, res) => {

    const user = await User.find();
    res.send(user);

});

router.delete('/users/:id', async (req, res) => {

    const user = await User.remove({ _id: req.params.id })
    res.status(200).send({ "message": "User is deleted sucessfully" });

});



module.exports = router;
