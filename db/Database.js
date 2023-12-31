const mysql = require('mysql2');

class Database {
    constructor (options) {
        this.options = options
        this.db = null
    }

    validate () {
        const {host, user,  database} = this.options;
        if (!host || !user  || !database)
        throw new Error('Invalid database');
        return;
    }

    connect () {
        this.validate();
        const {host, user, password, database} = this.options;
        this.db = mysql.createConnection(
            {
                host: host,
                user: user,
                password: password,
                database: database
            },
            console.log(`Employee database connection established`)
        );
    }

    disconnect () {
        this.db.database();
    }
}

module.exports = Database;