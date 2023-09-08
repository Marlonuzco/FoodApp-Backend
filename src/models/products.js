const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelized");
const { Categories } = require("./categories");

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
    incart: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    counter: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categories,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

const Popular = sequelize.define(
  "popular",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

Popular.belongsTo(Products, { foreignKey: "product_id", as: "product" });

module.exports = { Products, Popular };
