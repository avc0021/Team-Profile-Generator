const inquirer = require('inquirer');
const fs = require('fs');

// Import modules from library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer
    .prompt([
        {
            type:'text',
            name: 'mname',
            message:'Enter team managers name',
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter managers ID',
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter managers email',
        },
        {
            type: 'number',
            name: 'officenumber',
            message: 'Enter managers office number',
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])