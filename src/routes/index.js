const { Router } = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { checkConnection } = require("../controllers/CheckConnection/index");
const { createNewUser, login } = require("../controllers/Login/index");
const { getCategoriesAndPopulars } = require("../controllers/Categories/index");

const router = Router();

//petición get para probar la conexión
router.get("/checkconnection", checkConnection);

//Login Routes

//petición post para crear un nuevo usuario
router.post("/login/createnewuser", createNewUser);
//petición post para login de usuarios
router.post("/login/user", login);

//petición get para ir a todas las categorias y a los productos populares
router.get("/categories-populars", authenticateToken, getCategoriesAndPopulars);

module.exports = router;
