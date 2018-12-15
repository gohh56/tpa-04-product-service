const express = require('express');
const {
  handleFetchProduct,
  handleFetchTotalPrice,
} = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();

  //
  // TODO
  //
  // apiRouter にAPIルートとハンドラーを設定する
  //
  apiRouter.get('/products', handleFetchProduct);
  apiRouter.get('/price', handleFetchTotalPrice);

  app.use('/api', apiRouter);
};

module.exports = setup;
