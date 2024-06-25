const express = require("express");
const PackageController = require("../controllers/package.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/create-package",
  verify.verifyToken,
  verify.isAdmin,
   PackageController.createPackge);

router.get("/get-package", PackageController.getPackages);
router.patch(
  "/update-package/:id",
  verify.verifyToken,
  verify.isAdmin,
  PackageController.updatePackage
);

router.patch("/delete-soft-package/:id",
  verify.verifyToken,
  verify.isAdmin,
   PackageController.deleteSoftPackage);

module.exports = router;
