const { Router } = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { checkConnection } = require("../controllers/CheckConnection/index");
const { createNewUser, login } = require("../controllers/Login/index");
const { getCategories } = require("../controllers/Categories/index");

const router = Router();

//petición get para probar la conexión
router.get("/checkconnection", checkConnection);

//Login Routes

//petición post para crear un nuevo usuario
router.post("/login/createnewuser", createNewUser);

router.post("/login/user", login);

//petición get para ir a todas las categorias
router.get("/categories", authenticateToken, getCategories);

module.exports = router;
