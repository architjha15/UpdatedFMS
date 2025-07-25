const prices = require("../Models/priceModel");
const xlsx = require("xlsx");

const importPrices = async () => {
  const workbook = xlsx.readFile("./Data/flightData.xlsx");
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  return await prices.insertMany(data);
};

const price_fetch = async () => {
  return await prices.find({});
};

module.exports = { importPrices, price_fetch };
