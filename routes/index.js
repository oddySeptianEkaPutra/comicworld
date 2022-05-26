const Controller = require("../controllers");
const ComicController = require('../controllers/ComicController')
const UserController = require("../controllers/UserController");
const router = require("express").Router();

router.get('/register', UserController.registerForm)

router.post('/register', UserController.registerPost)

router.get('/login', UserController.loginForm)

router.post('/login', UserController.loginPost)

router.get('/comiclist', ComicController.ShowAll)

router.get('/comiclist/add', ComicController.addBook)

router.post('/comiclist/add', ComicController.saveBook)

router.get('/comiclist/restock', ComicController.emptyStock);

router.get('/comiclist/restock/:id', ComicController.restock);

// router.get('/dashboard', (req,res)=>{
//     res.send(`berhasil`)
// })



module.exports = router; 