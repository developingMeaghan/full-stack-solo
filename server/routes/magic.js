const express = require("express");
const db = require("../db/magic");

const router = express.Router();

router.get("/", (req, res) => {
  db.getDeck()
    .then(magic => {
      res.json(magic);
    })
    .catch(err => {
      console.error(err);
      res.setStatus(500).json({ error: "something is broken" });
    });
});

module.exports = router;
