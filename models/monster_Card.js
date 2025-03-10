const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
        Card_Name: {
            type: String,
            require: true
        },
        Atribute: {
            type: String,
            require: true
        },
        Type_of_card: {
            type: String,
            require: true
        },
        LevelRankLink: {
            type: Number,
            require: true
        },
        Image: String,
        Types: [
            {
                type: String,
                require: true
            }
        ],
        Card_Text: String,
        Stats: {
            ATK: {
                type: Number,
                require: true
            },
            DEF: {
                type: Number,
                require: true
            }
        },
        Number_Own: Number
}, {collation: 'Monster'})

module.exports = mongoose.model('Card', cardSchema);