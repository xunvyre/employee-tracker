const db = require('../db/connection');
const inquirer = require('inquirer');
const conTable = require('console.table');

const viewRoles = () =>
{
    db.query(`SELECT * FROM roles LEFT JOIN departments ON roles.department_id = departments.department_id;`, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
    });
};

const addRole = () =>
{
    inquirer.prompt
    ([

        {
            type: 'number',
            name: 'role_id',
            message: `What is the ID number of the position?`
        },
        {
            type: 'input',
            name: 'role_title',
            message: `What is the name of the position?`
        },
        {
            type: 'number',
            name: 'salary',
            message: `How much does this position make per year?`
        },
        {
            type: 'number',
            name: 'department_id',
            message: `What is the ID number of the department this position belongs to?`
        },
        {
            type: 'confirm',
            name: 'management',
            message: `Is this a management position?`,
            default: false
        }
    ])
    .then(({role_id, role_title, salary, department_id, management}) =>
    {
        const sql = `INSERT INTO roles (role_id, role_title, salary, department_id, management) VALUE (?,?,?,?,?);`;
        const params = [role_id, role_title, salary, department_id, management];

        db.query(sql, params, (err, res) =>
        {
            if (err) throw err;
            viewRoles();
        });
    });
};

module.exports = {viewRoles, addRole};