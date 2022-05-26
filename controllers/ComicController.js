const { Comic } = require('../models')
const { Op } = require("sequelize")
const formatMoney = require('../helpers/formatMoney')

class ComicController{
    static ShowAll(req, res){
        Comic.findAll({
            where: {
                stock: {
                    [Op.gt]: 0
                }
            }
        })
        .then((comic)=>{
            res.render('comiclist', {comic, formatMoney})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static addBook(req, res) {
        res.render("formAddBook");
    }

    static saveBook(req, res) {
        let newBook = {
            title: req.body.title,
            price: req.body.price,
            genre: req.body.genre,
            author: req.body.author,
            isbn: req.body.isbn,
            totalPage: req.body.totalPage,
            publisher: req.body.publisher,
            stock: req.body.stock,
            imgurl: req.body.imgurl,
        }

        Comic.create(newBook)
        .then(() => res.redirect("/comiclist"))
        .catch((err) => res.send(err));
    }

    static emptyStock(req, res) {
        Comic.findAll({
            where: {
                stock: {
                    [Op.eq]: 0
                }
            }
        })
        .then((comic)=>{
            res.render('emptyStock', {comic, formatMoney})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static restock(req, res) {
        Comic.increment({stock: 10}, {where: {id: +req.params.id}})
        .then(() => res.redirect("/comiclist/restock"))
        .catch(err => res.send(err));
    }
}

module.exports = ComicController