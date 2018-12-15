//
// TODO
//
// APIルーターのハンドラーをここに定義して実装する
//
const {
  getProducts,
  getTotalPrice,
  hasProduct,
} = require('./product');

const handleFetchProduct = function(req, res) {
  const products = getProducts();
  res.json({ products });
};

const handleFetchTotalPrice = function(req, res) {
  const totalPrice = {};
  const productIds = req.query.ids.split(',').map(Number).filter(id => hasProduct(id));
  totalPrice.productIds = productIds;
  totalPrice.total = getTotalPrice(productIds);
  res.json(totalPrice);
};

module.exports = {
  handleFetchProduct,
  handleFetchTotalPrice,
};
