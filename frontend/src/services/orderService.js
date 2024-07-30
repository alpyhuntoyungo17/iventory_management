
const Order = require('../models/Order');

const getAllOrders = async () => {
  try {
    return await Order.find();
  } catch (error) {
    throw new Error('Error fetching orders: ' + error.message);
  }
};

const getOrderById = async (id) => {
  try {
    const order = await Order.findById(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  } catch (error) {
    throw new Error('Error fetching order: ' + error.message);
  }
};

const createOrder = async (orderData) => {
  try {
    const newOrder = new Order(orderData);
    return await newOrder.save();
  } catch (error) {
    throw new Error('Error creating order: ' + error.message);
  }
};

const updateOrder = async (id, orderData) => {
  try {
    return await Order.findByIdAndUpdate(id, orderData, { new: true });
  } catch (error) {
    throw new Error('Error updating order: ' + error.message);
  }
};

const deleteOrder = async (id) => {
  try {
    return await Order.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting order: ' + error.message);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};
