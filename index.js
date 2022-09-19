const db = require('./db/connection');
const inquirer = require('inquirer');
const conTable = require('console.table');

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
                `Add an employee.`,
                `Update employee information.`,
                `Remove an employee.`,
                `View roles.`,
                `Add a role.`,
                `Remove a role.`,
                `View departments.`,
                `Add a department.`,
                `Remove a department.`,
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
                break;
            case `Add an employee.`:
                addEmployee();
                break;
            case `Update employee information.`:
                editEmployee();
                break;
            case `Remove an employee.`:
                deleteEmployee();
                break;
            case `View roles.`:
                viewRoles();
                break;
            case `Add a role.`:
                addRole();
                break;
            case `Remove a role.`:
                deleteRole();
                break;
            case `View departments.`:
                viewDeparts();
                break;
            case `Add a department.`:
                addDepart();
                break;
            case `Remove a department.`:
                deleteDepart();
                break;
            case `Quit.`:
                quit();
                break;
            default:
                break;
        };   
    })
    .catch(err =>
    {
        console.error(err);
    });
};

/*============Employee Functions============*/

const viewEmployees = () =>
{
    const sql = `SELECT * FROM employees 
    LEFT JOIN roles ON employees.role_id = roles.role_id 
    LEFT JOIN departments ON roles.department_id = departments.department_id;`

    db.query(sql, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
      startingPrompt();
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
            startingPrompt();
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
        },
        {
            type: 'number',
            name: 'role_id',
            message: `What is the ID number of their new position?`
        },
        {
            type: 'number',
            name: 'manager_id',
            message: `What is the ID number of their manager? Leave blank if they are now in management.`
        }
    ])
    .then(({id, role_id, manager_id}) =>
    {
        const sql = `UPDATE employees SET employees.role_id = ?, employees.manager_id = ? WHERE employees.id = ?;`;
        const params = [role_id, manager_id, id];

        db.query(sql, params, (err, res) =>
        {
            if (err) throw err;
            viewEmployees();
            startingPrompt();
        });
    });
};

const deleteEmployee = () =>
{
    inquirer.prompt
    ([
        {
            type: 'number',
            name: 'id',
            message: `Please enter the ID of the employee you wish to remove from the database:`
        }
    ])
    .then(({id}) =>
    {
        const sql = `DELETE FROM employees WHERE id = ?;`;
        
        db.query(sql, id, (err, res) =>
        {
            if (err) throw err;
            viewEmployees();
            startingPrompt();
        });
    });
};

/*============Role Functions============*/

const viewRoles = () =>
{
    db.query(`SELECT * FROM roles LEFT JOIN departments ON roles.department_id = departments.department_id;`, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
      startingPrompt();
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
            startingPrompt();
        });
    });
};

const deleteRole = () =>
{
    inquirer.prompt
    ([
        {
            type: 'number',
            name: 'id',
            message: `Please enter the ID of the position/role you wish to remove from the database:`
        }
    ])
    .then(({id}) =>
    {
        const sql = `DELETE FROM roles WHERE role_id = ?;`;
        
        db.query(sql, id, (err, res) =>
        {
            if (err) throw err;
            viewEmployees();
            startingPrompt();
        });
    });
};

/*============Department Functions============*/

const viewDeparts = () =>
{
    db.query(`SELECT * FROM departments;`, (err, res) =>
    {
      if (err) throw err;
      console.table(res);
      startingPrompt();
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
            startingPrompt();
        });
    });
};

const deleteDepart = () =>
{
    inquirer.prompt
    ([
        {
            type: 'number',
            name: 'id',
            message: `Please enter the ID of the department you wish to remove from the database:`
        }
    ])
    .then(({id}) =>
    {
        const sql = `DELETE FROM departments WHERE department_id = ?;`;
        
        db.query(sql, id, (err, res) =>
        {
            if (err) throw err;
            viewEmployees();
            startingPrompt();
        });
    });
};

/*============QOL Functions============*/

const quit = () =>
{
    console.log(`Thank you for using Employee Tracker!`);
    db.end();
};

/*============Starting Call============*/

startingPrompt();