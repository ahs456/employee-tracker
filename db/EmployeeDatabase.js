const Database = require('./Database.js');

class EmployeeDatabase extends Database {
    constructor(options) {
        super(options);
    }

    getDepartments() {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM department', (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    getRoles() {
        return new Promise((resolve, reject) => {
            this.db.query(
                `SELECT 
                    role.id, 
                    role.title, 
                    role.salary, 
                    department.name as department_name FROM role INNER JOIN Department ON role.department_id = Department.id`, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    getEmployees() {
        return new Promise((resolve, reject) => {
            this.db.query(
                `SELECT
                employee.id,
                role.title as role_title,
                role salart as role_salary,
                department.name as department_name,
                INNER JOIN employee ON employee.first_name = `
            )
        })
    }
}