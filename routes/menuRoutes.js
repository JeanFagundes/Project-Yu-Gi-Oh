const express = require("express");

const router = express.Router();
const MenuController = require("../controllers/MenuController");

router.get("/", MenuController.showMenu);

module.exports = router;
