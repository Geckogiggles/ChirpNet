const router = require('express').Router();
const { get } = require('express/lib/response.js');
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriends,
    deleteFriends
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/user/:userId/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriends)
    .delete(deleteFriends);

module.exports = router;