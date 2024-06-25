const express = require("express");
const PackageInPeriodController = require("../controllers/packageInPeriod.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

router.post(
  "/create-packageinperiod",
  verify.verifyToken,
  PackageInPeriodController.createPackageInPeriod
);

router.get(
  "/get-package-in-period-by-packageOrder/:id",
  verify.verifyToken,
  PackageInPeriodController.getPackageInPeriodByPackageOrder
);

router.get(
  "/get-all-packageinperiod",
  verify.verifyToken,
  PackageInPeriodController.getAllPackageInPeriod
);

router.get(
  "/add-product-package-in-period/:productId/:packageOrderId",
  PackageInPeriodController.addProductPackageInPeriod
);

router.patch(
  "/update-status-package-in-period/:packageInPeriodId",
  PackageInPeriodController.updateStatusOrder
);

router.get(
  "/get-package-in-period-of-package-order/:packageOrderId",
  PackageInPeriodController.getPackageInPeriodOfPackageOrder
);

module.exports = router;
