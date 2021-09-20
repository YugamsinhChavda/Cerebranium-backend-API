const router = require('express').Router();
let Admin = require('../models/admin.model');

router.post("/auth", async (req, res)=>{
    try{
        const admin = await Admin.findOne({userName: req.body.userName})
        !user && res.status(400).json("Wrong details")
        const validateUser = await Admin.compare(req.body.password, admin.password)
        !validateUser && res.status(400).json("Wrong details")

        res.status(200).send(admin);
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;