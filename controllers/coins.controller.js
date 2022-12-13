const boom = require("@hapi/boom");
const axios = require("axios").default;

const config = require("../config/config");

const filter_asset_ids = "BTC;ETH;USD;EUR;CNY;JPY;GBP;LTC;XRP;DOGE;MXN;SHIB";

class CoinsController {
  constructor() {}

  async all() {
    const url = `${config.cryptoApiUrl}/v1/assets?filter_asset_id=${filter_asset_ids}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          "X-CoinAPI-Key": config.cryptoApi,
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip,deflate,compress",
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoinsController;
