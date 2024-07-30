const Item = require('../models/Item');

const getAllItems = async () => {
  try {
    return await Item.find();
  } catch (error) {
    throw new Error('Error fetching items: ' + error.message);
  }
};

const getItemById = async (id) => {
  try {
    const item = await Item.findById(id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    throw new Error('Error fetching item: ' + error.message);
  }
};

const createItem = async (itemData) => {
  try {
    const newItem = new Item(itemData);
    return await newItem.save();
  } catch (error) {
    throw new Error('Error creating item: ' + error.message);
  }
};

const updateItem = async (id, itemData) => {
  try {
    return await Item.findByIdAndUpdate(id, itemData, { new: true });
  } catch (error) {
    throw new Error('Error updating item: ' + error.message);
  }
};

const deleteItem = async (id) => {
  try {
    return await Item.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting item: ' + error.message);
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};

