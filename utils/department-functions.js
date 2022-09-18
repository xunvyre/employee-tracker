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
    console.log('success');
};

module.exports = {viewDeparts, addDepart};