const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought
} = require("../../controllers/thought-controller");

// /api/thoughts 
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").get(getThoughtById).put(updateThought).delete(removeThought);

module.exports = router;
