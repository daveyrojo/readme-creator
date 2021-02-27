function generateMarkdown(data) {
  const gitHubUrl = `https://github.com/`
  const markdown = `
${data.license}

# ${data.project}

## Table of Contents
1.) [Description](#Description)
\n
2.) [Installation](#Installation)
\n
3.) [Usage](#Usage)
\n
4.) [Contributing](#Contributing)
\n
5.) [Tests](#Tests)
\n
6.) [Questions](#Questions)

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
Email: ${data.email}\n
GitHub: [${data.github}](${gitHubUrl}${data.github})`;
  
  return markdown
}

module.exports = generateMarkdown;





