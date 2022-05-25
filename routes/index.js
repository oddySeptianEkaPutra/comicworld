const Controller = require("../controllers");
const UserController = require("../controllers/UserController");
const router = require("express").Router();


router.get('/register', UserController.registerForm)

router.post('/register', UserController.registerPost)

router.get('/login', UserController.loginForm)

router.post('/login', UserController.loginPost)

router.get('/dashboard', (req,res)=>{
    res.send(`berhasil`)
})

module.exports = router; 