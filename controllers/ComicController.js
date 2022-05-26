const { Comic } = require('../models')
const formatMoney = require('../helpers/formatMoney')

class ComicController{
    static ShowAll(req, res){
        Comic.findAll()
        .then((comic)=>{
            // console.log(comic)
            res.render('comiclist', {comic, formatMoney})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = ComicController