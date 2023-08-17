const { Router } = require("express");
const { checkConnection } = require("../controllers/CheckConnection/index");
const { createNewUser, login } = require("../controllers/Login/index");

const router = Router();

//petición get para probar la conexión
router.get("/checkconnection", checkConnection);

//Login Routes

//petición post para crear un nuevo usuario
router.post("/login/createnewuser", createNewUser);

router.post("/login/user", login);

module.exports = router;
