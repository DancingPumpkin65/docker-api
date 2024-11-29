// controllers/itemController.js
const itemModel = require('../models/itemModel');

// Define response maps
const returner = { statuscode: 201, message: 'successful', body: itemModel.getAllItems() };
const putRp = { statuscode: 202, message: 'successfully created', body: itemModel.getAllItems() };
const delRp = { statuscode: 204, message: 'successfully deleted', body: itemModel.getAllItems() };
const delRpIdNotFound = { statuscode: 404, message: 'id not found', body: itemModel.getAllItems() };
const usedId = { statuscode: 401, message: 'used id', body: itemModel.getAllItems() };

// Controller functions
const getItems = (req, res) => {
    res.json(returner);
};

const addItem = (req, res) => {
    const { id, name } = req.body;

    if (itemModel.itemExists(id)) {
        res.json(usedId);
    } else {
        itemModel.addItem(id, name);
        res.json(putRp);
    }
};

const deleteItem = (req, res) => {
    const { id } = req.params;

    if (itemModel.deleteItem(id)) {
        res.json(delRp);
    } else {
        res.json(delRpIdNotFound);
    }
};

module.exports = {
    getItems,
    addItem,
    deleteItem
};
