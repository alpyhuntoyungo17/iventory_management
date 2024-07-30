const express = require('express');
const router = express.Router();

// Import route handlers
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Define routes
router.use('/items', itemRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;

