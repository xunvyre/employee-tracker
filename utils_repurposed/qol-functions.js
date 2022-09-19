const inquirer = require('inquirer');
const db = require('../db/connection');

const quit = () =>
{
    console.log(`Thank you for using Employee Tracker!`);
    db.end();
};

/* for future use:
    inquirer.prompt
    ([
        {
            type: 'confirm',
            name: 'confirmQuit',
            message: `Are you sure you want to quit?`,
            default: false
        }
    ])
    .then((confirmQuit) =>
    {
        if (confirmQuit === true)
        {
            console.log(`Thank you for using Employee Tracker!`);
            db.end();
        }
        else
        {
            return;
        }
    });
*/
module.exports = {quit};