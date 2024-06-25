const express = require("express");
const MysteryBoxController = require("../controllers/mysterybox.controller");
const { verif } = require("jsonwebtoken");
const router = express.Router();
const verify = require("../middlewares/verifyToken");

router.post("/create-mysterybox",
    verify.verifyToken,
    verify.isStaff,
     MysteryBoxController.createMysteryBox);
router.get("/get-mysterybox", MysteryBoxController.getMysteryBox);

module.exports = router;
