const express = require("express");
const {
  getAllUsers,
  getAllUsersById,
  createNewUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getAllUsersById);
router.post("/", createNewUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
