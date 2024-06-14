const express = require("express");
const ThemeController = require("../controllers/theme.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/create-theme",
    verify.verifyToken,
    verify.isAdmin,
    ThemeController.createTheme);

router.get("/get-themes", ThemeController.getThemes);

router.patch("/delete-theme/:id",
    verify.verifyToken,
    verify.isAdmin,
    ThemeController.deleteTheme);
module.exports = router;
