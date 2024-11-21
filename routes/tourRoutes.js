const express = require('express');
const ideaController = require('../controllers/ideaController');

const router = express.Router();

router.param('id', ideaController.checkID);

router
  .route('/')
  .get(ideaController.getAllIdeas)
  .post(ideaController.checkBody, ideaController.createIdea);

router
  .route('/:id')
  .get(ideaController.getIdea)
  .patch(ideaController.updateIdea)
  .delete(ideaController.deleteIdea);

module.exports = router;
