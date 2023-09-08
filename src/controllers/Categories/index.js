const { Categories } = require("../../models/categories");
const { Popular, Products } = require("../../models/products");

const getCategoriesAndPopulars = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    const populars = await Popular.findAll({
      include: [{ model: Products, as: "product" }],
    });
    res.status(200).json({
      message: "Categories and populars found successfully",
      categories,
      populars,
    });
  } catch (error) {
    console.log("Error in getCategoriesAndPopulars", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getCategoriesAndPopulars };
