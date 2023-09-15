const { Products } = require("../../models/products");

const productsCategories = async (req, res) => {
  console.log('category_id', req.body)
  try {
    const { category_id } = await req.body;
    const products = await Products.findAll({
      where: {
        category_id: category_id,
      },
    });
    console.log("request", category_id);
    res.status(200).json({ message: "Products found succefully", products });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error en productsCategories", error);
  }
};

module.exports = { productsCategories };
