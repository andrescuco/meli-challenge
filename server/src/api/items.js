const express = require("express");
const router = express.Router();
const axios = require("axios");

const {
  BASE_URL,
  author,
  getNumberOfDecimals,
  sortArrayOfObjectsByKey,
} = require("./helpers");

/**
 * Returns a list of the first four products given a query param.
 */
router.get("/", async (req, res, next) => {
  try {
    const searchQuery = req.query.search;
    const { data } = await axios.get(`${BASE_URL}/sites/MLA/search`, {
      params: { q: searchQuery },
    });

    const availableFiltersCategories = data.available_filters.find(
      (filter) => (filter.id = "category")
    );

    const categories = sortArrayOfObjectsByKey(
      availableFiltersCategories.values,
      "results"
    )
      .map((category) => category.name)
      .slice(-4);

    const items = data.results.slice(0, 4).map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price,
          decimals: getNumberOfDecimals(product.price),
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        state_name: product.address.state_name,
      };
    });

    res.json({ ...author, items, categories });
  } catch (error) {
    next(error);
  }
});

/**
 * Given the id of a product, it returns its detailed information.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const { data: productDetail } = await axios.get(
      `${BASE_URL}/items/${req.params.id}`
    );
    const { data: productDescription } = await axios.get(
      `${BASE_URL}/items/${req.params.id}/description`
    );
    const { data: productSearch } = await axios.get(
      `${BASE_URL}/sites/MLA/search`,
      {
        params: { q: productDetail.title },
      }
    );

    const availableFilters = productSearch?.filters.find(
      (filter) => (filter.id = "category")
    )?.values;

    const categories = availableFilters?.[0]?.path_from_root
      .map((category) => category.name)
      .slice(0, 4);

    const condition = productDetail.attributes.find(
      (attribute) => attribute.id === "ITEM_CONDITION"
    ).value_name;

    const productInfo = {
      id: productDetail.id,
      title: productDetail.title,
      price: {
        currency: productDetail.currency_id,
        amount: productDetail.price,
        decimals: getNumberOfDecimals(productDetail.price),
      },
      picture: productDetail.thumbnail,
      condition: condition,
      sold_quantity: productDetail.sold_quantity,
      description: productDescription.plain_text,
    };

    res.json({
      ...author,
      ...productInfo,
      // Add fallback in case the product doesn't have filters
      categories: categories ?? [productDetail.title],
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
