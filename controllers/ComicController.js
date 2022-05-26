const { Comic } = require('../models')
const formatMoney = require('../helpers/formatMoney')
const { Op } = require ('sequelize')

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
            const user = req.query.user
            res.render('comiclist', {comic, formatMoney, user})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    static addBook(req, res) {
        res.render("formAddbook");
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
            res.render('emptystock', {comic, formatMoney})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static restock(req, res) {
        Comic.increment({stock: 12}, {where: {id: +req.params.id}})
        .then(() => res.redirect("/restock"))
        .catch(err => console.log(err));
    }
    static deleteBook(req, res){
        Comic.destroy({where: {
            id: +req.params.id
        }})
        .then(() => res.redirect("/restock"))
        .catch(err => console.log(err));
    }
}

module.exports = ComicController