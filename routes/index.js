var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Bistrô Bar | O encontro perfeito entre tradiçaõ e inovação.",
  });
});

module.exports = router;
