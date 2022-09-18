const db = require('./db/connection');
const inquirer = require('inquirer');
const conTable = require('console.table');
const {viewEmployees, addEmployee, editEmployee} = require('./utils/employee-functions');
const {viewRoles, addRole} = require('./utils/role-functions');
const {viewDeparts, addDepart} = require('./utils/department-functions');
const {quit} = require('./utils/qol-functions');

async function startingPrompt()
{
    await inquirer.prompt
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
        if (response.choice === `Quit.`)
        {
            quit();
        }
        else
        {
            switch (response.choice)
            {
                case `View employees.`:
                    viewEmployees();
                    break;
                case `Add employee.`:
                    addEmployee();
                    break;
                case `Update employee information.`:
                    editEmployee();
                    break;
                case `View roles.`:
                    viewRoles();
                    break;
                case `Add a role.`:
                    addRole();
                    break;
                case `View departments.`:
                    viewDeparts();
                    break;
                case `Add a department.`:
                    addDepart();
                    break;
                case `Quit.`:
                    quit();
            }
        };
    })
    .catch(err =>
    {
        console.error(err);
    });
};

startingPrompt();