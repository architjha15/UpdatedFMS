const seat = require("../Services/seatService");

const seatData = async (req, res) => {
  try {
    await seat.importSeats();
    res.status(200).json({ message: "Seats data imported successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchSeats = async (req, res) => {
  try {
    data = await seat.seats_fetch();
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { seatData, fetchSeats };
