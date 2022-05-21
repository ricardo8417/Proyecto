const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');
// CRUD  get post put delete


// Get all menus
router.get('/', permission('admin', 'client'), async(req, res) => {
    const menus = await sequelize.models.menus.findAndCountAll()
    return res.status(200).json({ data: menus });
});


// Create a new menu
router.post('/', permission('admin'), async(req, res) => {
    const { body } = req;
    const menu = await sequelize.models.menus.create({
        name: body.name,
        description: body.description,
        cost: body.cost,
        image: body.image,
    })
    await menu.save();
    return res.status(201).json({ data: menu })
});


// Update a menu by id
router.put('/:id', permission('admin'), async(req, res) => {
    const { body, params: { id } } = req;
    const menu = await sequelize.models.menus.findByPk(id);
    if (!menu) {
        return res.status(404).json({ code: 404, message: 'Menu not found' });
    }

    const updatedMenu = await menu.update({
        name: body.name,
        description: body.description,
        cost: body.cost,
        image: body.image,
    });

    return res.json({ data: updatedMenu });
});


// Delete a menu by id
router.delete('/:id', permission('admin'), async(req, res) => {
    const { params: { id } } = req;
    const menu = await sequelize.models.menus.findByPk(id);
    if (!menu) {
        return res.status(404).json({ code: 404, message: 'Menu not found' });
    }
    await menu.destroy();
    return res.json();

});


module.exports = router;