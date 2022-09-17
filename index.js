const db = require('./db/connection');
const inquirer = require('inquirer');
const conTable = require('console.table');
const {viewEmployees, addEmployee, editEmployee} = require('./utils/employee-functions');
const {viewRoles, addRole} = require('./utils/role-functions');
const {viewDeparts, addDepart} = require('./utils/department-functions');
const {quit} = require('./utils/qol-functions');

function startingPrompt()
{
    inquirer.prompt
    ([
        {
            type: 'list',
            name: 'choice',
            message: `What would you like to do?`,
            choices:
            [
                `View employees.`,
                `Add employee.`,
                `Update employee information.`,
                `View roles.`,
                `Add a role.`,
                `View departments.`,
                `Add a department.`,
                `Quit.`
            ]
        }
    ])
    .then((response) =>
    {
        switch (response.choice)
        {
            case `View employees.`:
                viewEmployees();
                return;
            case `Add employee.`:
                addEmployee();
                return;
            case `Update employee information.`:
                editEmployee();
                return;
            case `View roles.`:
                viewRoles();
                return;
            case `Add a role.`:
                addRole();
                return;
            case `View departments.`:
                viewDeparts();
                return;
            case `Add a department.`:
                addDepart();
                return;
            case `Quit.`:
                quit();
                return;
        };
    });
};

startingPrompt();