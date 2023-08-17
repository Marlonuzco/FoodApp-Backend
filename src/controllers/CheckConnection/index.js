const checkConnection = async (req, res) => {
  try {
    await res
      .status(200)
      .json({ message: "Conexión exitosa Food App Backend" });
  } catch (error) {
    res.status(404).json({ message: "Error en la conexión " });
  }
};

module.exports = { checkConnection };
