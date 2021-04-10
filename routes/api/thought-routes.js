const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
    .post(getThoughtById);

// /api/thoughts/<thoughtId>
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;