const express = require("express");
const router = express.Router();

function getDayName(date, locale) {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function formatDate(date) {
  return `${getDayName(
    date,
    "en-us"
  )} ${date.getMonth()}, ${date.getFullYear()}`;
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const authorName = req.body.authorName;
  const message = req.body.message;
  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
