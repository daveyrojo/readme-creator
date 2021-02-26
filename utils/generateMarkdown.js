// var renderedLicense;
// renderLicenseBadge(data.license)
// function renderLicenseBadge(license) {}
// // TODO: Create a function that returns the license link

// if ( `${data.license}` === 'Apache License 2.0') {

//   renderedLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

//   return renderedLicense;

// } else if (`${data.license}` === 'BSD 3-Clause "New" or "Revised" License') {

//   renderedLicense = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

//   return renderedLicense;

// } else if (`${data.license}` === 'MIT License') {

//   renderedLicense = 'MIT[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

//   return renderedLicense;

// } else if (`${data.license}` === 'Boost Software License 1.0') {

//   renderedLicense = 'Boost[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

//   return renderedLicense;

// } else {

//   renderedLicense = '';

//   return renderedLicense;

// }

// //${data.license} +=???
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const gitHubUrl = `https://github.com/`
  const markdown = `
${data.license}

# ${data.project}

## Description

${data.description}
   
## Installation

${data.dependencies}

## Usage
${data.repoUse}

## Contributing
${data.contribute}

## Tests
${data.tests} 
## Questions
${data.email}\n
[${data.github}](${gitHubUrl}${data.github})`;
  
  return markdown
}

module.exports = generateMarkdown;





