const express = require('express');
const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.send({
      "posts": []
    });
});

module.exports = postsRouter;