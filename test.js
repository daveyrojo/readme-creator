const fs = require('fs');
const path = require('path'); 
const generateMarkdown = require('./utils/generateMarkdown');

var mockResponses = {
    github: 'daveyrojo',
    email: 'd.vincenteldridge@gmail.com',
    project: 'Dave"s Project',
    descirption: 'Project stuff!',
    license: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    dependencies: 'none',
    tests: 'npm',
    repoUse: 'fork',
    contribute: 'have fun!'
}

fs.writeFile('readme.md', generateMarkdown(mockResponses), (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md!')
);