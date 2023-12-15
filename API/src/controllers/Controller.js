const path = require("path");
const axios = require("axios");

const protected = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/protected.html"));
};

module.exports = {
  protected,
};
