const { User, Profile } = require('../models')


class ProfileController {
    static showProfile(req, res){ 
        const id = req.session.UserId
        Profile.findOne({
            include: User,
            where:{
                UserId: id
            }
        })
        .then((profile)=>{
            res.render('profile', {profile})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}

module.exports = ProfileController