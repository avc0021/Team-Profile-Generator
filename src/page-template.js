// this will structure of html page and insert data that was entered
const layout = (manager, engineer, intern) => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    ${generatePage(manager, engineer, intern)}
</body>
</html>
    
    `;   
}; 

const generatePage = () => {
`
<h2>${manager.getName()}</h2>
<h3>${manager.getRole()}<h3>
<div>${manager.getId()}</div>
<div><a href="mailto:${manager.getEmail()}></div>
<div>${manager.getOfficeNumber()}</div>

<h2>${engineer.getName()}</h2>
<h3>${engineer.getRole()}<h3>
<div>${engineer.getId()}</div>
<div><a href="mailto:${engineer.getEmail()}></div>
<div><a href="https://github.com/${engineer.getGhUsername()}></div>

<h2>${intern.getName()}</h2>
<h3>${intern.getRole()}<h3>
<div>${intern.getId()}</div>
<div><a href="mailto:${intern.getEmail()}></div>
<div>${intern.getSchool()}</div>
`
}

module.exports = layout;