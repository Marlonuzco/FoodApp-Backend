const jwt = require("jsonwebtoken");

async function authenticateToken(req, res, next) {
  try {
    const token = await req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "No se proporsionó un token de autenticación." });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "token invalido o expirado" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log("Authenticate token error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  authenticateToken,
};
