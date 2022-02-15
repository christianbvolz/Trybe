module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  });

  return Book;
};
