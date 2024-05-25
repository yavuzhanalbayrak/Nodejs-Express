const express = require("express");
const app = express();
const router = express.Router();
const {
  getHealth,
  methodNotAllowed,
} = require("../controller/healthController");
//const { getUser } = require("../controller/companyController");

router.get("/health", getHealth);
router.all("/health", methodNotAllowed);

module.exports = router;
