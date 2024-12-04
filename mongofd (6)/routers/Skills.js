const express = require("express");
let router = express.Router();
const { Skills } = require("../modules/Skills");

router.post("/create", async (req, res) => {
  let { skills} = req.body;
    
  let data = await new Skills({
    skills,
  })

  await data.save()
  res.json({
    status: true,
    massage: "Ma'lumot qo'shildi"
  })
});


module.exports = router;
