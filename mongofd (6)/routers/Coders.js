const express = require("express");
const router = express.Router();
const { Coder } = require("../modules/Coder");

router.post("/create", async (req, res) => {
  let { name, hobby, home, job, phone, skills, technology } = req.body;
  const validData = await Coder.findOne({
    name,
    hobby,
    job,
    phone,
    skills,
    technology,
  });

  if (validData)
    return res.json({
      status: false,
      message: "Siz oldin ro'yhatdan o'tgansiz",
    });
  if (name.length == 0)
    return res.json({
      status: false,
      message: "Ma'lumot to'liq emas",
    });
  if (name.length < 3)
    return res.json({
      status: false,
      message: "Yozgan ma'lumotlaringiz juda qisqa",
    });

  const data = await Coder({
    name,
    hobby,
    home,
    job,
    phone,
    skills,
    technology,
  });

  await data.save();
  res.json({
    status: true,
    message: "Ma'lumot qo'shildi",
  });
});







router.get("/all", async (req, res) => {
  const allData = await Coder.find().populate(
    "hobby",
    "home",
    "job",
    "hobby",
    "phone",
    "skills",
    "technology"
  );
  res.json({
    status: true,
    message: allData,
  });
});


router.get("/:id", async (req, res) => {
  const allData = await Coder.findById(req.params.id)
  res.json({
    status: true,
    message: allData,
  });
});

module.exports = router;