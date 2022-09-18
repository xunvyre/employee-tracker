const db = require('../db/connection');
const inquirer = require('inquirer');
const conTable = require('console.table');

const viewDeparts = () =>
{
    db.query(`SELECT * FROM departments;`, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
    });
};

const addDepart = () =>
{
    inquirer.prompt
    ([
        {
            type: 'input',
            name: 'department_title',
            message: `What is the name of the department?`
        }
    ])
    .then(({department_title}) =>
    {
        const sql = `INSERT INTO departments (department_title) VALUE (?);`;
        const params = [department_title];

        db.query(sql, params, (err, res) =>
        {
            if (err) throw err;
            viewDeparts();
        });
    });
};

module.exports = {viewDeparts, addDepart};