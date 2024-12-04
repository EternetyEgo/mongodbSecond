const express = require("express");
let router = express.Router();
const { Phone } = require("../modules/Phone");

router.post("/create", async (req, res) => {
  let { phoneNum } = req.body;
    
  let data = await new Phone({
    phoneNum,
  })

  await data.save()
  res.json({
    status: true,
    massage: "Ma'lumot qo'shildi"
  })
});


module.exports = router;
