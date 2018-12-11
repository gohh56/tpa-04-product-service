//
// TODO
//
// APIルーターのハンドラーをここに定義して実装する
//
const {
  getProducts,
  getTotalPrice,
} = require('./product');

const handleFetchProduct = function(req, res) {
  const products = {};
  products.products = getProducts();
  res.json(products);
};

module.exports = {
  handleFetchProduct,
};
