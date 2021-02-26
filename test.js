const fs = require('fs');
const path = require('path'); 
const generateMarkdown = require('./utils/generateMarkdown');

var mockResponses = {
    github: 'daveyrjo',
    email: 'd.vincenteldridge@gmail.com',
    project: 'Dave"s Project',
    descirption: 'Project stuff!',
    license: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    dependencies: 'none',
    tests: 'npm',
    repoUse: 'fork',
    contribute: 'have fun!'
}

fs.writeFile('readme.md', generateMarkdown(mockResponses), (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md!')
);