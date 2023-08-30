const { Products, Popular } = require("../../models/products");

const popularProducts = async (req, res) => {
  try {
    const popularsProducts = await Popular.findAll({
      include: [
        {
          model: Products,
        },
      ],
    });
    res
      .status(200)
      .json({ message: "Popular products found succefully", popularsProducts });
  } catch (error) {
    console.log("Error en popularProducts", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { popularProducts };
