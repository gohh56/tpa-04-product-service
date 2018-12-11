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

const handleFetchTotalPrice = function(req, res) {
  const totalPrice = {};
  const productIds = req.query.ids.split(',').map(Number);
  totalPrice.productIds = productIds;
  totalPrice.total = getTotalPrice(productIds);
  res.json(totalPrice);
};

module.exports = {
  handleFetchProduct,
  handleFetchTotalPrice,
};
