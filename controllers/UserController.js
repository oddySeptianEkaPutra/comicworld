const { User, Profile } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {
    static registerForm(req, res) {
        const errors = req.query.errors;
        res.render('regis', {errors});
    }

    static registerPost(req, res) {
        const { email, password, role} = req.body
        User.create({ email, password, role })
            .then((newUser) => {
               const {firstName, lastName, phoneNumber, address} = req.body 
               const {id} = newUser
               console.log(id, firstName, lastName, phoneNumber, address)
               Profile.create({
                   firstName: firstName,
                   lastName: lastName,
                   phoneNumber: phoneNumber,
                   address: address,
                   UserId: id
               })
               .then(()=>{
                   
                   res.redirect('/login')
               })
            })
            .catch((err) => {
                if(err.name === "SequelizeValidationError") {
                    const errors = err.errors.map(el => el.message);
                    res.redirect(`/register?errors=${errors}`);
                } else {
                    res.send(err);
                }
            })
    }
    static loginForm(req, res) {
        const {error} = req.query
        res.render('login', {error})
    }

    static loginPost(req, res) {
        const { email, password } = req.body;
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    const validation = bcrypt.compareSync(password, user.password)
                    if (validation) {
                        req.session.UserId = user.id
                        req.session.role = user.role
                        const email = user.email
                        return res.redirect(`/comiclist?user=${email}`)
                    } else {
                        const error = `invalid password`
                        return res.redirect(`/login?error=${error}`)
                    }
                } else {
                    const error = `invalid username`
                    return res.redirect(`/login?error=${error}`)
                }
            })
    }
    static getlogout(req,res){
       req.session.destroy((err)=>{
            if(err) {
                res.send(err)
            }else{
                res.redirect('/login')
            }
       })
    }
}


module.exports = UserController