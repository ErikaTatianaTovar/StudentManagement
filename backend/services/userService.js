const { findByEmail } = require('../repositories/userRepository');

const getUserByEmail = async (email) => {
    const user = await findByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }
    return { email: user.email };
};

module.exports = { getUserByEmail };
