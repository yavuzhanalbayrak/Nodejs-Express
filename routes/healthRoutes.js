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
//const { getUser } = require("../controller/companyController");

router.get("/", getHealth);
router.get("/:id", getHealthById);
router.post("/", createHealth);
router.put("/:id", updateHealth);
router.delete("/:id", deleteHealth);


router.all("/", methodNotAllowed);

module.exports = router;
