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
INNER JOIN employee ON employee.first_name OR employee.last_name = employee.first_name AND employee.last_name,
                role.title as role_title,
                role salart as role_salary,
                department.name as department_name,
INNER JOIN employee ON manager.first_name ON manager.last_name = manager.first_name AND manager.last_name
                
                FROM employee
                INNER JOIN role ON employee.role_id = role.id
                INNER JOIN department ON role.department_id = department.id
                LEFT JOIN employee as manager ON employee.manager_id = manager.id`,
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

    
}