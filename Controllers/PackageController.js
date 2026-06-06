const Package = require("../Models/PackageModel");


// Add Package

const addPackage = async (req, res) => {
  try {
    const packageData =
      await Package.create(req.body);

    res.status(201).json({
      success: true,
      packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Packages

const getPackages = async (
  req,
  res
) => {
  try {
    const packages =
      await Package.find();

    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Package

const updatePackage = async (
  req,
  res
) => {
  try {
    const updatedPackage =
      await Package.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json(
      updatedPackage
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Package

const deletePackage = async (
  req,
  res
) => {
  try {
    await Package.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Package Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getPackagesByCategory = async (
  req,
  res
) => {
  try {
    const packages =
      await Package.find({
        category:
          req.params.category,
      });

    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addPackage,
  getPackages,
  updatePackage,
  getPackagesByCategory,
  deletePackage,
};