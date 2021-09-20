const router = require('express').Router();
let Subject = require('../models/subject.model');

router.route('/').get((req, res) => {
    Subject.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search-details/:subjectCode').get((req,res) => {
    Subject.find({subjectCode: req.params.subjectCode})
    .then(subject => {
        res.json(subject);
    })
    .catch(err => res.status(400).send(err));
});

router.route('/search-details/credit/:credits').get((req,res) => {
    Subject.find({credits: req.params.credits})
    .then(subject => {
        res.json(subject);
    })
    .catch(err => res.status(400).send(err));
});

router.route('/search-details/admin/:adminName').get((req,res) => {
    Subject.find({adminName: req.params.adminName})
    .then(subject => {
        res.json(subject);
    })
    .catch(err => res.status(400).send(err));
});

router.route('/search-details/professor/:professorAssigned').get((req,res) => {
    Subject.find({professorAssigned: req.params.professorAssigned})
    .then(subject => {
        res.json(subject);
    })
    .catch(err => res.status(400).send(err));
});

router.route('/subject/:subjectName').get((req,res) => {
    Subject.find({subjectName: req.params.subjectName})
    .then(subject => {
        res.send(subject);
    })
    .catch(err => res.status(400).send(err));
});

router.route('/add-subject').post((req,res) => {
    const newSubject = new Subject({
        subjectID: req.body.subjectID,
        subjectCode: req.body.subjectCode,
        subjectName: req.body.subjectName,
        professorAssigned: req.body.professorAssigned,
        credits: req.body.credits,
        adminName: req.body.adminName
    });

    newSubject.save()
    .then(() => {
        res.send('Subject Added')
    })
    .catch(err => res.status(400).json('Error: '+ err));
});

router.patch("/update-details/:id", async (req, res) => {
    try{
        const subject = await Subject.findOne({_id: req.params.id})

        if(req.body.subjectID){
           subject.subjectID = req.body.subjectID;
        }
        
        if(req.body.subjectCode){
            subject.subjectCode = req.body.subjectCode;
        }
        
        if(req.body.subjectName){
            subject.subjectName = req.body.subjectName;
        }
        if(req.body.professorAssigned){
            subject.professorAssigned = req.body.professorAssigned;
        }
        if(req.body.credits){
            subject.credits = req.body.credits ;
        }
        if(req.body.adminName){
            subject.adminName = req.body.adminName;
        }

        await subject.save()
        res.send("Details Updated")
        res.send(subject)
    } catch{
        res.status(404)
        res.send({error: "User does not exist!"})
    }
});

router.route('/delete-subject/:id').delete((req, res) => {
    Subject.findByIdAndRemove(req.params.id)
    .then(() => {
        res.send('Subject deleted');
    })
    .catch(err => res.status(400).send(err))
})




module.exports = router;