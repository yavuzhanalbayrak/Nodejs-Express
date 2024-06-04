const express = require("express");
const app = express();
const router = express.Router();
const {
  getUsers,
  methodNotAllowed,
  getUserById,
  register,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const validateToken = require("../middlewares/validateTokenHandler");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", register);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.all("/", methodNotAllowed);

module.exports = router;
