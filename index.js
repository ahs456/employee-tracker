const inquirer = require('inquirer');
const { MainQuestions, AddDepartmentQuestion, AddEmployeeQuestion, AddRoleQuestion, UpdateEmployeeRoleQuestion} = require('./questions.js');
const EmployeeDatabase  = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});

db.connect();

const doFirstQuestions = () => {
    inquirer
    .prompt(MainQuestions)
    .then((respone) => {
        switch (respone.option) {
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