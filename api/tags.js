const express = require('express');
const tagsRouter = express.Router();

tagsRouter.get('/', (req, res) => {
    res.send({
      "tags": []
    });
});
  
module.exports = tagsRouter;