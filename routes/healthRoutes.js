const express = require("express");
const app = express();
const router = express.Router();
const {
  getHealth,
  methodNotAllowed,
  createHealth,
  updateHealth,
  deleteHealth,
  getHealthById
} = require("../controller/healthController");
const validateToken = require("../middlewares/validateTokenHandler");
//const { getUser } = require("../controller/companyController");

router.get("/",validateToken(["user"]), getHealth);
router.get("/:id", getHealthById);
router.post("/", createHealth);
router.put("/:id", updateHealth);
router.delete("/:id", deleteHealth);


router.all("/", methodNotAllowed);

module.exports = router;
