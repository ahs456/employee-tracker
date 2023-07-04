const MainQuestions =  [
    {
        type: 'list',
        name: 'option',
        message: 'Please select an item below?',
        choices: [
            { value: 'view_departments', name: "view departments"},
            { value: 'view_roles', name: "view roles"},
            { value: 'view_employees', name: "view employees"},
            { value: 'add_department', name: "add department"},
            { value: 'add_roles', name: "add role"},
            { value: 'add_employee', name: "add employee"},
            { value: 'update_role', name: "update employee role"},
        ],
    },
]

const AddDepartmentQuestion = [
    {
        type: 'input',
        name: 'department_name',
        message: 'Enter department name:'
    },
]

const AddEmployeeQuestion = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Enter employee first name:'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter employee last name:',
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Choose employee role:',
        choices: [],
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Choose employee manager:',
        choices: [],
    },
]