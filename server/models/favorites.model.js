const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    cityName: String,
    cityKey: Number,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = favoriteSchema;