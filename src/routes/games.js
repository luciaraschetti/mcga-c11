const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const games = require('../games.json');

router.get('/', (req, res) => {
    res.json(games);
});

router.post('/', (req, res) => {
    const {name, genre, desc, rating, version } = req.body;
    if(name && genre && desc && rating && version) {
        const id = games.length + 1;
        const newGame = {id, ...req.body};
        games.push(newGame);
        res.json(games);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {name, genre, desc, rating, version} = req.body;
    if(name && genre && desc && rating && version) {
        _.each(games, (game, i)=>{
            if(game.id == id) {
                game.name = name;
                game.genre = genre;
                game.desc = desc;
                game.rating = rating;
                game.version = version;
            }
        })
        res.json(games)
    } else {
        res.status(500).json({error: 'There was an error'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(games, (game, i) => {
        if(game.id == id) {
            games.splice(i, 1);
        }
    });
    res.send(games);
})

module.exports = router;