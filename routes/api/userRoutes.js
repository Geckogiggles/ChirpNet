const router = require('express').Router();
const { get } = require('express/lib/response.js');
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/courseController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;