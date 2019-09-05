const express = require('express');
const router = express.Router();
const Posts = require("../posts/postDb")

router.get('/', (req, res) => {
    Posts.get()
    .then(posts => {
        res.status(200).json(posts)
    })
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;