const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');
// CRUD  get post put delete


// Get all contact
router.get('/', permission('admin', 'client'), async(req, res) => {
    const contacts = await sequelize.models.contacts.findAndCountAll()
    return res.status(200).json({ data: contacts });
});


// Create a new contact
router.post('/', permission('admin', 'client'), async(req, res) => {
    const { body } = req;
    const contact = await sequelize.models.contacts.create({
        userId: body.userId,
        name: body.name,
        mail: body.mail,
        service: body.service,
        telephone: body.telephone,
        asunto: body.asunto,
        message: body.message,
    })
    await contact.save();
    return res.status(201).json({ data: contact })
});


// Update a contact by id
router.put('/:id', permission('admin'), async(req, res) => {
    const { body, params: { id } } = req;
    const contact = await sequelize.models.contacts.findByPk(id);
    if (!contact) {
        return res.status(404).json({ code: 404, message: 'Contact not found' });
    }

    const updatedContact = await contact.update({
        userId: body.userId,
        name: body.name,
        mail: body.mail,
        service: body.service,
        telephone: body.telephone,
        asunto: body.asunto,
        message: body.message,
    });

    return res.json({ data: updatedContact });
});


// Delete a menu by id
router.delete('/:id', permission('admin'), async(req, res) => {
    const { params: { id } } = req;
    const contact = await sequelize.models.contacts.findByPk(id);
    if (!contact) {
        return res.status(404).json({ code: 404, message: 'Contact not found' });
    }
    await contact.destroy();
    return res.json();

});


module.exports = router;