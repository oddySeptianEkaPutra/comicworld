const { User, Profile } = require('../models')


class ProfileController {
    static showProfile(req, res) {
        const id = req.session.UserId
        Profile.findOne({
            include: User,
            where: {
                UserId: id
            }
        })
            .then((profile) => {
                res.render('profile', { profile })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    static updateProfile(req, res) {
        const id = req.session.UserId
        Profile.findOne({
            include: User,
            where: {
                UserId: id
            }
        })
            .then((profile) => {
                res.render('editprofile', { profile })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    static editProfile(req, res) {
        const id = req.session.UserId
        const {firstName, lastName, phoneNumber, address} = req.body
        Profile.update({firstName, lastName, phoneNumber, address},{
            where: {
                UserId: id
            }
        })
        .then(()=>{
            res.redirect(`/Profile`)
        })
        .catch((err) =>{
            res.send(err)
        })
    }

}

module.exports = ProfileController