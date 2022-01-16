// import npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// Import modules from library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//ask general questions first and onces entered it will jump to details questions
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

       // if manager is selected enter office number
        if (generalQs.role === 'Manager') {
            const managerInfo = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter managers office number'
                },
            ])
        // creates new manager object if manager is selected
            const newLeader = new Manager(
                generalQs.name,
                generalQs.id,
                generalQs.email,
                managerInfo.officeNumber
            );
            newEmployeeData.push(newLeader);
        
        // if engineer is seleceted as a role answer these questions
        } else if (generalQs.role === 'Engineer') {
            const engineerInfo = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'ghusername',
                    message: 'Enter github username'
                },
            ])
        // creates new engineer object using data provided
            const newEngineer = new Engineer(
                generalQs.name,
                generalQs.id,
                generalQs.email,
                generalQs.ghUsername
            );
            newEmployeeData.push(newEngineer);
        
        // if intern is selected ask these questions
        } else if (generalQs.role === 'Intern') {
            const internInfo = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter school attended'
                },
            ])
        // creates a intern object with data entered
            const newIntern = new Intern(
                generalQs.name,
                generalQs.id,
                generalQs.email,
                generalQs.school
            );
        }
    };  
        // ask for office number if manager
        // ask for github username if  engineer
        // ask for school if intern
    

        // collect data and write file to html