const db = require('../db/connection');
const conTable = require('console.table');

const viewEmployees = () =>
{
    const query = `SELECT * FROM employees 
    LEFT JOIN roles ON employees.role_id = roles.role_id 
    LEFT JOIN departments ON roles.department_id = departments.department_id;`

    db.query(query, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
    });
    console.log(``);
};

const addEmployee = () =>
{
    console.log('success');
};

const editEmployee = () =>
{
    console.log('success');
};

module.exports = {viewEmployees, addEmployee, editEmployee};