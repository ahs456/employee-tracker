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
                    department.name as department_name 
                    FROM role 
                    INNER JOIN Department ON role.department_id = Department.id`, 
                    (err, results) => {
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
                `SELECT employee.id, 
                employee.first_name, 
                employee.last_name, 
                role.title, 
                department.name AS department, 
                role.salary, 
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
                FROM employee 
                LEFT JOIN role on employee.role_id = role.id 
                LEFT JOIN department on role.department_id = department.id 
                LEFT JOIN employee manager on manager.id = employee.manager_id`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
        });
    }

    addDepartment(department) {
        return new Promise((resolve, reject) => {
            this.db.query('INSERT INTO department SET?', { name: department.department_name}, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(`${department.department_name} successfully added`);
            });
        });
    }

    addRole(role) {
        const roleData = {
            title: role.title,
            salary: role.salary,
            department_id: role.department_id
        };

        return new Promise((resolve, reject) => {
            this.db.query('INSERT INTO role SET?', roleData, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(`${role.title} successfully added`);
            });
        });
    }

    addEmployee(employee) {
        const employeeData = {
            role_id: employee.role_id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            manager_id: employee.manager_id,
        };
        
        return new Promise((resolve, reject) => {
            this.db.query('INSERT INTO employee SET?', employeeData, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(`${employee.first_name} ${employee.last_name} successfully added`);
            });
        });
    }

    updateEmployeeRole(employee) {
        return new Promise((resolve, reject) => {
            this.db.query('UPDATE employee SET role_id=? WHERE id=?', employee.role_id, employee.employee_id, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(results);
            });
        });
    }
}

module.exports = EmployeeDatabase;