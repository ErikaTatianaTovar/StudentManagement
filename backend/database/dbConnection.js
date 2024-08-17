const mysql = require('mysql2/promise');
const { db } = require('../config/config');

class dbConnections {
    constructor() {
        this.pool = mysql.createPool({
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.database,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async getConnection() {
        try {
            const connection = await this.pool.getConnection();
            return connection;
        } catch (error) {
            throw new Error(`Error getting database connection: ${error.message}`);
        }
    }
}

module.exports = new dbConnections();
