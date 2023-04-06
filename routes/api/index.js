const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/Users', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;