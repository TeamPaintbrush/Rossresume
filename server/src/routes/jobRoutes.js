const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Static routes before the parameterised ones.
router.get('/', jobController.list);            // ?status= &company=
router.get('/board', jobController.board);      // grouped by status

// <id> is "company/role".
router.get('/:company/:role', jobController.get);
router.patch('/:company/:role', jobController.patch);          // { status?, priority?, nextAction?, resumeVariant?, note? }
router.post('/:company/:role/notes', jobController.addNote);   // { text }

module.exports = router;
