const router = require("express").Router()

router.get("/",(_req,res)=>{
    res.status(200).json({
        message: "success",
    })
})

module.exports = router