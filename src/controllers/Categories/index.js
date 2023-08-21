const { Categories } = require("../../models/categories");

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res
      .status(200)
      .json({ message: "Categories found successfully", categories });
  } catch (error) {
    console.log("Error in getCategories", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getCategories };
