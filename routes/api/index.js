const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');
const thoughtsRoutes = require('./thoughtsRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/Users', thoughtsRoutes);
router.use('/students', studentRoutes);

module.exports = router;
