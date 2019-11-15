const userRoute = require('express').Router();

userRoute.get('/:id', (req, res) => {
    try {
        res.send("api for get user details");
        console.log(req.body);
    } catch (err) {
        res.send(err);
    }

})
userRoute.get('/', (req, res) => {
    try {

       res.send("api for add user");
    } catch (err) {
        res.send(err);
    }
})
userRoute.patch('/:id', (req, res) => {
    try {
        res.send("api for update user"+ req.param );
        console.log(req.body);
    } catch (err) {
        res.send(err);
    }
})

userRoute.delete('/:id', (req, res) => {
    try {
        res.send("api for delete user"+ req.param );
        console.log(req.body);
    } catch (err) {
        res.send(err);
    }
});

module.exports = userRoute;
