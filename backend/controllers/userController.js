const userService = require('../services/userService');

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await userService.getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { getUserByEmail };
