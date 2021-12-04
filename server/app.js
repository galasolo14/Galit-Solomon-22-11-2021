const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const MONGODB = 'mongodb+srv://gala:1414@cluster0.qqbhm.mongodb.net/weather';
const post = process.env.PORT || 3007;
const favoritesController = require('./controllers/favorites');

app.use(bodyParser.json());

const init = async () => {
    await mongoose.connect(MONGODB);
    app.listen(post, (err) => console.log('Server up'));
    require('./serivce/inxed');
};

init();

app.use('/favorites', favoritesController);

app.get('/test', (req, res) => {
    return res.json({ a: 1, b: 2 });
});