const { User, Profile } = require('../models')


class ProfileController {
    static showProfile(req, res){ 
        const id = req.session.UserId
        Profile.findOne({
            where:{
                UserId: id
            }
        })
        .then((profile)=>{
            res.send(profile)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}

module.exports = ProfileController