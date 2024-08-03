const User = require('../models/userModel');

// @desc Get All users
// @route GET /api/users
// access public
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// @desc Post Create new user 
// @route POST /api/users
// access public
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// @desc Get User
// @route GET /api/users/:id
// access public
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// @desc Update User Entry
// @route PUT /api/users/:id
// access public
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

// @desc Delete User Entry
// @route PUT /api/users/:id
// access public
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send('User deleted');
  } catch (err) {
    res.status(500).send(err);
  }
};