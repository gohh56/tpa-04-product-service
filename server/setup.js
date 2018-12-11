const express = require('express');
const {
  handleFetchProduct,
} = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();

  //
  // TODO
  //
  // apiRouter にAPIルートとハンドラーを設定する
  //
  apiRouter.get('/products', handleFetchProduct);

  app.use('/api', apiRouter);
};

module.exports = setup;
