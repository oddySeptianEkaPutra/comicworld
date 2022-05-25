const { User } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {
    static registerForm(req, res) {
        res.render('regis')
    }

    static registerPost(req, res) {
        const { email, password, role } = req.body
        User.create({ email, password, role })
            .then((newUser) => {
                res.redirect('./login')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static loginForm(req, res) {
        res.render('login')
    }

    static loginPost(req, res) {
        const { email, password } = req.body;
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    const validation = bcrypt.compareSync(password, user.password)
                    if (validation) {
                        return res.redirect('/dashboard')
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
}


module.exports = UserController