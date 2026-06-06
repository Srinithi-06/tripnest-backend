const express = require("express");
const router = express.Router();

const {
  addPackage,
  getPackages,
  getPackagesByCategory,
} = require("../Controllers/PackageController");

router.post("/add", addPackage);
router.get("/", getPackages);
router.get("/category/:category", getPackagesByCategory);

module.exports = router;