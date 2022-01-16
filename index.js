// import npm packages
const inquirer = require('inquirer');
const fs = require('fs');


// adds new employee data to array
const newEmployeeData = [];
// Import modules from library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//ask general questions first creating a promise and once entered it will jump to menu
const questions = async() => {
  const moreQuestions = await inquirer
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
        if (moreQuestions.role === 'Manager') {
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
                moreQuestions.name,
                moreQuestions.id,
                moreQuestions.email,
                managerInfo.officeNumber
            );
            newEmployeeData.push(newLeader);
        
        // if engineer is seleceted as a role answer these questions
        } else if (moreQuestions.role === 'Engineer') {
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
                moreQuestions.name,
                moreQuestions.id,
                moreQuestions.email,
                moreQuestions.ghUsername
            );
            newEmployeeData.push(newEngineer);
        
        // if intern is selected ask these questions
        } else if (moreQuestions.role === 'Intern') {
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
                moreQuestions.name,
                moreQuestions.id,
                moreQuestions.email,
                moreQuestions.school
            );
            newEmployeeData.push(newIntern);
        }
    };  

    // main menu will have option to add new employee or create data into html file.
    // if new employee is selected then it starts cycle over again and if create team is selected it will create html file
    async function startQuestions() {
        await questions()

        const menu = await inquirer
            .prompt([
                {
                type: 'choices',
                name: 'john',
                message:'Select from the following choices',
                choices: ['Add employee', 'Create team'],
                }
            ])
        if (menu.choices === 'Add employee') {
            return startQuestions()
        }
        return createTeam();
    

    }
    startQuestions();
       
    

        // collect data and write file to html