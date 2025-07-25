const seatData = require("../Models/seatModel");
const xlsx = require("xlsx");

const importSeats = async () => {
  const workbook = xlsx.readFile("./Data/flightData.xlsx");
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);

  return await seatData.insertMany(data);
};

const seats_fetch = async () => {
  return await seatData.find({});
};

module.exports = { importSeats, seats_fetch };
