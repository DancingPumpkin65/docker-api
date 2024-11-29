// models/itemModel.js

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

const getAllItems = () => items;

const addItem = (id, name) => {
    items.push({ id, name });
};

const deleteItem = (id) => {
    const index = items.findIndex(item => item.id == id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }
    return false;
};

const itemExists = (id) => items.some(item => item.id == id);

module.exports = {
    getAllItems,
    addItem,
    deleteItem,
    itemExists
};
