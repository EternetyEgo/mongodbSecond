const express = require("express");
let router = express.Router();
const { Job } = require("../modules/Job");

router.post("/create", async (req, res) => {
  let { name } = req.body;
    
  let data = await new Job({
   name,
  })

  await data.save()
  res.json({
    status: true,
    massage: "Ma'lumot qo'shildi"
  })
});


module.exports = router;
