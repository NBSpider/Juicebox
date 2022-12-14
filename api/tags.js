const express = require('express');
const { getPostsByTagName } = require('../db');
const tagsRouter = express.Router();

tagsRouter.get('/', (req, res) => {
    res.send({
      "tags": []
    });
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  // read the tagname from the params

  const { tagName } = req.params

  try {

    // use our method to get posts by tag name from the db
    const taggedPosts = await getPostsByTagName ( tagName );

    const post = taggedPosts.filter ((posts) => {

      if (posts.active) {
      return true;
      }

      else if(req.user && posts.author.id === req.user.id) {
        return true;
      }

      else return false()
      
    });

    // send out an object to the client { posts: // the posts }

    res.send ({ post: post });
    
  } catch ({ name, message }) {
    // forward the name and message to the error handler
    next ({ name, message });
  }

});
  
module.exports = tagsRouter;