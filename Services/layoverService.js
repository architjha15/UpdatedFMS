const layovers = require("../Models/layoverModel");
const xlsx = require("xlsx");

const importlayovers = async () => {
  const workbook1 = xlsx.readFile("./Data/flightData.xlsx");
  const sheetName = workbook1.SheetNames[0];
  const worksheet = workbook1.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  return await layovers.insertMany(data);
};

module.exports = { importlayovers };
