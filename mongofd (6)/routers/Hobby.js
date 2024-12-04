const express = require("express")
let router = express.Router()
const { Hobby } = require("../modules/Hobby")

router.post("/create", async (req, res) => {
    let {name} = req.body

    let data = await new Hobby({
        name,
    })

    await data.save()
    res.json({
        status: true,
        message: "Ma'lumot qo'shildi"
    })
})

module.exports = router