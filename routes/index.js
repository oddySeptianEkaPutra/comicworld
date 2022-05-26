const ComicController = require('../controllers/ComicController');
const ProfileController = require('../controllers/ProfileController');
const Profile = require('../controllers/ProfileController');
const TransactionController = require('../controllers/TransactionController');
const UserController = require("../controllers/UserController");
const router = require("express").Router();

const isAdmin = function (req, res, next){
    if(req.session.UserId && req.session.role !== "admin"){
        const error = 'Access Denied'
        res.redirect(`/login?error=${error}`)
    } else{
        next()
    }
}

router.get('/', UserController.loginForm)

router.get('/register', UserController.registerForm)

router.post('/register', UserController.registerPost)

router.get('/login', UserController.loginForm)

router.post('/login', UserController.loginPost)

router.get('/logout', UserController.getlogout)


router.use(function(req, res, next){
    console.log(req.session)
    if(!req.session.UserId){
        const error = 'Please login First'
        res.redirect(`/login?error=${error}`)
    } else{
        next()
    }
})

router.get('/comiclist', ComicController.ShowAll);
router.get('/restock',isAdmin, ComicController.emptyStock);
router.get('/restock/:id',isAdmin, ComicController.restock);
router.get('/delete/:id',isAdmin, ComicController.deleteBook);
router.get('/comiclist/addBook', isAdmin, ComicController.addBook)
router.post('/comiclist/addBook', isAdmin, ComicController.saveBook)
router.get('/Profile', ProfileController.showProfile)
router.get('/Edit_Profile', ProfileController.updateProfile)
router.post('/Edit_Profile', ProfileController.editProfile)
router.get('/transaction/:id', TransactionController.getTransaction)
router.post('/transaction/:id', TransactionController.postTransaction)
router.get('/invoice', TransactionController.sendInvoice)

module.exports = router; 