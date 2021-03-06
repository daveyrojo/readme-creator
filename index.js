// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path'); //may not be needed - Manoli notes had it so I added to be safe
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What short of license should your project have?',
        choices: [{ 
            name: 'Apache License 2.0',
            value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            { 
            name: 'MIT License', 
            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            },
            { 
            name: 'BSD 3-Clause',
            value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            },
            { 
            name: 'Boost Software License 1.0',
            value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            },
            { name:'None', 
            value:''}]
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?' 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be ran to run tests?'
    },
    {
        type: 'input',
        name: 'repoUse',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?'

    }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSynth(path.join(process.cwd(), fileName), data);
 }
 

// TODO: Create a function to initialize app
const init = async () => { 
    const inquirerResponses = await  inquirer.prompt(questions)


    //.then((inquirerResponses) => {
        // const readMeContent = writeToFile(answers);

        fs.writeFile('readme.md', generateMarkdown({...inquirerResponses}), (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
        );

   // })
}

// Function call to initialize app
init();


