const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

const BASE_URL = "https://api.mercadolibre.com";
const author = {
  author: {
    name: "Andrés",
    lastname: "Cuellar",
  },
};

app.get("/", async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const { data } = await axios.get(`${BASE_URL}/sites/MLA/search`, {
      params: { q: searchQuery },
    });

    const products = data.results.slice(0, 4).map((product) => {
      const numberOfDecimals =
        product.price.toString().split(".")[1]?.length ?? 0;

      // TODO: Add categories array
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price,
          decimals: numberOfDecimals,
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        state_name: product.address.state_name,
      };
    });

    res.json({ ...author, items: products });
  } catch (error) {
    console.error(error);
  }
});

app.get("/items/:id", async (req, res) => {
  try {
    const { data: productDetail } = await axios.get(
      `${BASE_URL}/items/${req.params.id}`
    );
    const { data: productDescription } = await axios.get(
      `${BASE_URL}/items/${req.params.id}/description`
    );

    const numberOfDecimals =
      productDetail.price.toString().split(".")[1]?.length ?? 0;

    const productInfo = {
      id: productDetail.id,
      title: productDetail.title,
      price: {
        currency: productDetail.currency_id,
        amount: productDetail.price,
        decimals: numberOfDecimals,
      },
      picture: productDetail.thumbnail,
      condition: productDetail.condition,
      sold_quantity: productDetail.sold_quantity,
      description: productDescription.plain_text,
    };

    res.json({ ...author, ...productInfo });
  } catch (error) {
    console.error(error);
  }
});

// http://localhost:5000/api/v1/emojis
app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
