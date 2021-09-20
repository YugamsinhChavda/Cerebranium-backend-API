const router = require('express').Router();
let Admin = require('../models/admin.model');

router.route('/add-admin').post((req,res) => {
    const newAdmin = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        emailID: req.body.emailID,
        mobileNumber: req.body.mobileNumber,
        password: req.body.password
    });

    newAdmin.save()
    .then(() => {
        res.send('Admin registered')
    })
    .catch(err => res.status(400).send('Error: '+ err));
});

router.patch("/update-details/:id", async (req, res) => {
    try{
        const admin = await Admin.findOne({_id: req.params.id})

        if(req.body.firstName){
            admin.firstName = req.body.firstName;
        }
        
        if(req.body.lastName){
            admin.lastName = req.body.lastName;
        }
        
        if(req.body.userName){
            admin.userName = req.body.userName;
        }
        if(req.body.emailID){
            admin.emailID = req.body.emailID;
        }
        if(req.body.mobileNumber){
            admin.mobileNumber = req.body.mobileNumber ;
        }
        if(req.body.password){
            admin.password = req.body.password;
        }

        await admin.save()
        res.send("Details Updated")
        res.send(admin)
    } catch{
        res.status(404)
        res.send({error: "Admin does not exist!"})
    }
});



module.exports = router;

