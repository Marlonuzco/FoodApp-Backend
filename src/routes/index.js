const { Router } = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { checkConnection } = require("../controllers/CheckConnection/index");
const { createNewUser, login } = require("../controllers/Login/index");
const { getCategoriesAndPopulars } = require("../controllers/Categories/index");
const {
  productsCategories,
  getUserFavorites,
  addProductToFavoritesUser,
  deleteProductFromFavoritesUser,
} = require("../controllers/Products/index");

const router = Router();

//petición get para probar la conexión
router.get("/check-connection", checkConnection);

//Login Routes

//petición post para crear un nuevo usuario
router.post("/login/createnewuser", createNewUser);
//petición post para login de usuarios
router.post("/login/user", login);

//Rutas de productos y categorias

//petición get para ir a todas las categorias y a los productos populares
router.get("/categories-populars", authenticateToken, getCategoriesAndPopulars);

//petición get para buscar los productos por categoria
router.get("/categories-products", authenticateToken, productsCategories);

//petición get para buscar los productos favoritos de un usuario
router.get("/user-favorites", authenticateToken, getUserFavorites);

//petición post para que un usuario agregue un producto a favorito
router.post(
  "/products/user-favorites/add",
  authenticateToken,
  addProductToFavoritesUser
);

//petición delete para que un usuario elimine un producto de favoritos
router.delete(
  "/products/user-favorites/delete",
  authenticateToken,
  deleteProductFromFavoritesUser
);

module.exports = router;
