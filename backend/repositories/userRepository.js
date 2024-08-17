const dbConnection = require('../database/dbConnection');

const findByEmail = async (email) => {
    let connection;
    try {
        connection = await dbConnection.getConnection(); 
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0] || null;
    } catch (err) {
        throw new Error(`Database query failed: ${err.message}`);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

const save = async (user) => {
    let connection;
    try {
        connection = await dbConnection.getConnection(); 
        const [result] = await connection.query('INSERT INTO users (email, password_hash) VALUES (?, ?)', [user.email, user.passwordHash]);
        return result;
    } catch (err) {
        throw new Error(`Database query failed: ${err.message}`);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = { findByEmail, save };
