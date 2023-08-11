const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/',async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
      const comments = await Comment.findAll({
        include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
      });
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  
  router.post('/', async (req, res) => {
    // create a new comment
    try{
      const newComment = await Comment.create({content, user_id: req.session.user_id, project_id});
      res.status(200).json(newComment);
    }catch (err){
      res.status(500).json(err);
    }
  });
  
  router.put('/:id',async (req, res) => {
    // update a comment by its `id` value
    try{
      const comment = await Comment.update(req.body,{where:{id:req.params.id}}) 
      res.status(200).json(comment);
    }catch (err){
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id',async (req, res) => {
    // delete a comment by its `id` value
    try{
      const comment = await Comment.destroy({where:{id:req.params.id}})
      res.status(200).json(comment);
    }catch (err){
      res.status(500).json(err);
    }
  });
  
  module.exports = router;