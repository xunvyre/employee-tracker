const db = require('../db/connection');
const inquirer = require('inquirer');
const conTable = require('console.table');

const viewEmployees = () =>
{
    const sql = `SELECT * FROM employees 
    LEFT JOIN roles ON employees.role_id = roles.role_id 
    LEFT JOIN departments ON roles.department_id = departments.department_id;`

    db.query(sql, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
    });
};

const addEmployee = () =>
{
    inquirer.prompt
    ([
        {
            type: 'input',
            name: 'first_name',
            message: `What is the first name of the new employee?`
        },
        {
            type: 'input',
            name: 'last_name',
            message: `What is the last name of the new employee?`
        },
        {
            type: 'number',
            name: 'role_id',
            message: `What is the ID number of the position of the new employee?`
        },
        {
            type: 'number',
            name: 'manager_id',
            message: `What is the ID of the supervisor of this employee?`
        }
    ])
    .then(({last_name, first_name, role_id, manager_id}) =>
    {
        const sql = `INSERT INTO employees (last_name, first_name, role_id, manager_id) VALUES (?,?,?,?);`;
        const params = [last_name, first_name, role_id, manager_id];

        db.query(sql, params, (err, res) =>
        {
            if (err) throw err;
            viewEmployees();
        });
    });
};

const editEmployee = () =>
{
    inquirer.prompt
    ([
        {
            type: 'number',
            name: 'id',
            message: `What is the ID of the employee you wish to update?`
        }
    ])
    .then((id) =>
    {
        console.log(id);
    })
};

module.exports = {viewEmployees, addEmployee, editEmployee};