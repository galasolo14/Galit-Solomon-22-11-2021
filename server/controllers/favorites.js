const express = require('express');
const router = express.Router();
const { addFavorite, fetchFavorite, deleteFavorite} = require('./../serivce/inxed');
const { addToFavotireValidation } = require('./../validation');

router.get('/', async (req, res) => {
    try {
        const dataFavorites = await fetchFavorite();
        return res.json({dataFavorites});
    } catch(err) {
        return res.sendStatus(400);
    }
});

router.post('/add', async (req, res) => {
    const {error} = addToFavotireValidation(req.body.data)
    if(error) {
        return res.status(400).send(error.details[0].message)
    }else{
        const { data } = req.body
        try {
            const favoriteCity = await addFavorite(data);
            return res.sendStatus(200);
        } catch(err) {
            return res.sendStatus(400);
        }
    }   
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    try {
        const cartId = await deleteFavorite(id);
        return res.sendStatus(200);
    } catch(err) {
        return res.sendStatus(400);
    }
});

module.exports = router;