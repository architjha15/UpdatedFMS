const layover = require("../Services/layoverService");

const insertLayover = async (req, res) => {
  try {
    await layover.importlayovers();
    res.status(200).json({ message: "Layover details imported successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { insertLayover };
