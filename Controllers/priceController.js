const price = require("../Services/priceService");

const insertPrice = async (req, res) => {
  try {
    await price.importPrices();
    res.status(200).json({ message: "Price details imported successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchPrice = async (req, res) => {
  try {
    data = await price.price_fetch();
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { insertPrice, fetchPrice };
