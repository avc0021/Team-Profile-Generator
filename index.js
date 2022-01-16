// import npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// Import modules from library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//ask questions
const detailedQs = async() => {
  const generalQs = await inquirer
        .prompt([
            {
                type:'text',
                name: 'name',
                message:'Enter your name',
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter employee ID',
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter your email',
            },
            {
                type: 'list',
                message: 'What is your role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            }
        ])
        console.log(generalQs);
        if (answers.role === 'Engineer') {
            const managerInfo = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter managers office number'
                },
            ])
            const newLeader = new Manager(
                answers.name,
                answers.id,
                answers.email,
                managerInfo.officeNumber
            );
        }

        // ask for office number if manager
        // ask for github username if  engineer
        // ask for school if intern
    };    

        // collect data and write file to html