const { Products, UserFavorites } = require("../../models/products");

const productsCategories = async (req, res) => {
  try {
    const { category_id } = await req.query;
    const products = await Products.findAll({
      where: {
        category_id: category_id,
      },
    });
    if (products.length > 0) {
      res.status(200).json({ message: "Products found succefully", products });
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error en productsCategories", error);
  }
};

const getUserFavorites = async (req, res) => {
  try {
    const { id } = req.query;
    const items = await UserFavorites.findAll({
      where: {
        user_id: id,
      },
      include: [{ model: Products, as: "product" }],
    });
    const products = items.map((product) => product.product);
    if (products.length > 0) {
      res.status(200).json({
        message: "Favorites of the user found succefully",
        products,
      });
    } else {
      res
        .status(404)
        .json({ message: "Error favorites products of the user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error en getUserFavorites", error);
  }
};

const addProductToFavoritesUser = async (req, res) => {
  try {
    const { user_id, product_id, product } = req.body;
    const newFavorite = await UserFavorites.create({
      user_id,
      product_id,
    });
    res.status(200).json({
      message: "Product added succefully to favorites",
      newFavorite,
      product,
    });
    console.log("newFavorite", req.body);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error en addProductToFavoritesUser", error);
  }
};

const deleteProductFromFavoritesUser = async (req, res) => {
  try {
    const { user_id, product_id, product } = req.body;
    const deleteFavorite = await UserFavorites.destroy({
      where: {
        user_id,
        product_id,
      },
    });
    if (deleteFavorite === 1) {
      res.status(200).json({
        message: "Product deleted succefully from favorites",
        product,
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
    console.log("req.body", req.body);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("Error en deletedProductFromFavoritesUser", error);
  }
};

module.exports = {
  productsCategories,
  getUserFavorites,
  addProductToFavoritesUser,
  deleteProductFromFavoritesUser,
};
