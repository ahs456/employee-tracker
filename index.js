const inquirer = require('inquirer');
const { MainQuestions, AddDepartmentQuestion, AddEmployeeQuestion, AddRoleQuestion, UpdateEmployeeRoleQuestion} = require('./questions.js');
const EmployeeDatabase  = require('./db/EmployeeDatabase.js');
const { run } = require('node:test');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});

db.connect();

const runFirstQuestions = () => {
    inquirer
    .prompt(MainQuestions)
    .then((response) => {
        switch (response.option) {
            case 'view_departments':
                view_departments();
                break;
            case 'view_roles':
                view_roles();
                break;
            case 'view_employees':
                view_employees();
                break;
            case 'add_department':
                add_department();
                break;
            case 'add_role':
                add_role();
                break;
            case 'add_employee':
                add_employee();
                break;
            case 'uopdate_role':
                update_role();
                break;
        }
    })
}

const view_departments = () => {
    db.getDepartments().then((results) => {
        console.table(results);
        runFirstQuestions();
    });
}

const view_roles = () => {
    db.getRoles().then((results) => {
        console.table(results);
        runFirstQuestions();
    });
}

const view_employees = () => {
    db.getEmployees().then((results) => {
        console.table(results);
        runFirstQuestions();
    });
}

const add_department = () => {
    inquirer
    .prompt(AddDepartmentQuestion)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('/n', results, '/n');
            runFirstQuestions();
        });
    })
}

const add_role = () => {
    db.getDepartments().then((results) => {
        const departmentQuestion = AddRoleQuestion[2];
        results.forEach((department) => {
            departmentQuestion.choices.push({
                value: department.id,
                name: department.name
            });
        });

        inquirer
        .prompt(AddRoleQuestion)
        .then((response) => {
            db.addRole(response).then((results) => {
                console.log('/n', results, '/n');
                runFirstQuestions();
            });
        })
    });
}

const add_employee = () => {
    db.getRoles().then((results) => {
        const roleQuestion = AddEmployeeQuestion[2];
        results.forEach((role) => {
            const role_summary = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQuestion.choices.push({
                value: role.id,
                name: role_summary
            });
        });

        db.getEmployees().then((results) => {
            const managerQuestion = AddEmployeeQuestions[3];
            results.forEach((employee) => {
                managerQuestion.choices.push({
                    value: employee.id,
                    name: employee.name
                });
            });

            managerQuestion.choices.push({
                value: null,
                name: 'None'
            });

            inquirer
                .prompt(AddEmployeeQuestion)
                .then((response) => {
                    db.addEmployee(response).then((results) => {
                        console.log('/n', results, '/n');
                        runFirstQuestions();
                    });
                })
        });
    });
}

const update_role = () => {
    db.getEmployees().then((results) => {
        const employeeQuestion = UpdateEmployeeRoleQuestion[0];
        results.forEach((employee) => {
            employeeQuestion.choices.push({
                value: employee.id,
                name: employee.name
            });
        });

        db.getRoles().then((results) => {
            const roleQuestion = UpdateEmployeeRoleQuestion[1];
            results.forEach((role) => {
                roleQuestion.choices.push({
                    value: role.id,
                    name: role.title
                });
            });

            inquirer
                .prompt(UpdateEmployeeRoleQuestion)
                .then((response) => {
                    db.updateEmployeeRole(response).then((results) => {
                        console.log('/n', results, '/n');
                        runFirstQuestions();
                    });
                })
        });
    });
}

runFirstQuestions();
