const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const tournaments = require('../tournaments.json')

router.get('/',(req,res) => {
    res.json(tournaments)
});

router.post('/',(req,res) => {
    const {name,administrator,game,status,date,slots,server,settings} = req.body;
    if(name  && administrator && game && status && date && slots && server && settings) {
        const id= tournaments.length + 1;
        const newTournament = {...req.body,id};
        tournaments.push(newTournament)
        res.json(tournaments)
    } else {
        res.json('Wrong request')
    }
    res.send('Recived')
});

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {name,administrator,game,status,date,slots,server,settings} = req.body;
    if(name  && administrator && game && status && date && slots && server && settings) {
        _.each(tournaments,(tournament,i)=>{
            if(tournament.id == id) {
                tournament.name=name;
                tournament.administrator=administrator;
                tournament.game=game;
                tournament.status=status;
                tournament.date=date;
                tournament.slots=slots;
                tournament.server=server;
                tournament.settings=settings;
            }
        })
        res.json(tournaments)
    } else {
        res.json('Error')
    }
})

router.delete('/:id',(req,res) =>{
    const {id} = req.params;
    _.each(tournaments,(tournament,i)=>{
        if(tournament.id==id) {
            tournaments.splice(i,1)
        }
    })
    res.send(tournaments)
})

module.exports = router;