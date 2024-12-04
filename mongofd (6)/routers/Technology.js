const express = require("express");
let router = express.Router();
const { Technology } = require("../modules/Technology");

router.post("/create", async (req, res) => {
  let { technology } = req.body;
    
  let data = await new Technology({
    technology,
  })

  await data.save()
  res.json({
    status: true,
    massage: "Ma'lumot qo'shildi"
  })
});


module.exports = router;
