const router = require("express").Router();
const Contects = require("./schema/contacts");

router.get("/api/contacts", (re, res) => {
  Contects.find().then((datas) => {
    res.status(200).json(datas);
  });
});

router.post("/api/contacts", (req, res) => {
  const { username, phone } = req.body;
  let newCont = new Contects({
    name: username,
    phone: phone,
  });
  newCont
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
