const mongoose = require('mongoose')
const favoriteSchema = require('./../models/favorites.model')
const Favorite = mongoose.model('Favorite', favoriteSchema)


const addFavorite = async (favoriteCity) => {
    const {name, key} = favoriteCity
    try {
        const favoriteToAdd = new Favorite({ cityName: name, cityKey: key });
        await favoriteToAdd.save();
    } catch (err) {
        console.log(err)
    }
}

const fetchFavorite = async () => {
    try {
        const favorites = await Favorite.find({});
        return (favorites)
    } catch (err) {
        console.log(err)
    }  
}

const deleteFavorite = async (favotireId) => {
    try {
        const deleted = await Favorite.deleteOne({ cityKey: favotireId });
        return (deleted);
    } catch (err) {
        throw err;
    }
}

module.exports = { addFavorite, fetchFavorite, deleteFavorite}