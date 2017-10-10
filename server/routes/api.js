const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/partydb', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.post('/postParty', (req, res) => {
  connection((db) => {
    db.collection('parties')
      .insertOne(req.body, function(err, result){
        if(err){
            res.send(err);
        } else {
          res.send('success');
        }
      });
  });
});

// Get users
router.get('/getParty', (req, res) => {
    connection((db) => {
        db.collection('parties')
            .find()
            .toArray()
            .then((parties) => {
                response.data = parties;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;
