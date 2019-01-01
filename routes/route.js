const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//retrieving contacts
router.get('/contacts', (req, res, next) => {
    //res.send('Retrieving contacts list')
    Contact.find(function(err, contacts) {
        res.json(contacts);
    })
})

//add contacts
router.post('/contact', (req, res, next) => {
    //logic to add contacts
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Failed to add contacts' })
        } else {
            res.json({ msg: 'Contact added successfully!!!' });
        }
    })
})


//delete contacts
router.delete('/contact/:id', (req, res, next) => {
    //logic to delete contacts
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if (err) res.json(err);
        else res.json(result);
    })
})

module.exports = router;