const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type:'text',
            name: 'mname',
            message:'Enter team managers name'
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter managers ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter managers email' 
        },
        {
            type: 'number',
            name: 'officenumber',
            message: 'Enter managers office number'
        }
        {
            
        }
    ])