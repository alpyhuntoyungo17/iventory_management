
const User = require('../models/User');

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error fetching user: ' + error.message);
  }
};

const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    return await newUser.save();
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

const updateUser = async (id, userData) => {
  try {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  } catch (error) {
    throw new Error('Error updating user: ' + error.message);
  }
};

const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
