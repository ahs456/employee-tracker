const inquirer = require('inquirer');
const { MainQuestions, AddDepartmentQuestion, AddEmployeeQuestion, AddRoleQuestion, UpdateEmployeeRoleQuestion} = require('questions.js');
const EmployeeDatabase  = require('db/EmployeeDatabase.js');
const { connect } = require('http2');

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
    .then((respone))
}