const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

router.use('/Users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
