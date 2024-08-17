const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findByEmail, save } = require('../repositories/userRepository');
const { jwtSecret } = require('../config/config');

const register = async (email, password) => {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = { email, passwordHash };
    return save(user);
};

const login = async (email, password) => {
    const user = await findByEmail(email);
    
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    
    if (!isMatch) {
        throw new Error('Password invalid');  
    } 

    // Generar el token y devolverlo
    return jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });
};

module.exports = { register, login };
