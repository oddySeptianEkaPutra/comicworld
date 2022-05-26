const { Transaction, Profile, Comic } = require('../models')
const formatMoney = require('../helpers/formatMoney')
const { Op } = require('sequelize')
const { send, redirect } = require('express/lib/response')

class TransactionController {
    static getTransaction(req, res) {
        const id = +req.params.id
        const UserId = req.session.UserId

        Comic.findOne({
            where: {
                id: id
            }
        })
            .then((comic) => {
                const findcomic = comic
                Profile.findOne({
                    where: {
                        UserId: UserId
                    }
                })
                    .then((user) => {
                        res.render('transaction', { findcomic, user })
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static postTransaction(req, res) {
        const UserId = req.session.UserId
        const ComicId = req.params.id
        const { quantity, price } = req.body
        Transaction.create({
            price: +price,
            quantity: +quantity,
            UserId: UserId,
            ComicId: ComicId
        })
            .then((transaction) => {
                
                const { quantity, ComicId, UserId, price } = transaction
                
                Comic.decrement('stock',
                    {
                        by: quantity,
                        where: { id: ComicId }
                    });
            })
            .then(() => {
                res.redirect('/comiclist')
            })
            .catch((err) => {
                console.log(err)
            })
    }

}


module.exports = TransactionController