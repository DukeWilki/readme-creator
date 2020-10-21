const fs = require("fs");
const inquirer = require("inquirer");

// Capitalisation function to draw attention to readme filename
function capitalise(value) {
  return value.toUpperCase();
 }

// Array to put colour in licence badge
 var colours = [
  "brightgreen",
  "green",
  "yellowgreen",
  "yellow",
  "orange",
  "red",
  "blue",
  "lightgrey",
  "blueviolet",
  "ff69b4",
  "9cf"
];
 var colour = colours[Math.floor(Math.random()*colours.length)];

// Questions being asked via inquirer
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log(
            "Please enter a title, you can always change it later if you change your mind!"
          );
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Describe this project:",
      name: "description",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log(
            "Describe your project, you can always change it later if you change your mind!"
          );
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What files are included in your project?",
      name: "files",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Don't know? Enter TBA and fix it up later.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Are there any instructions on how to install?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use your application?",
      name: "usage",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Don't know? Enter TBA and fix it up later.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Explain the design that you used:",
      name: "design",
    },
    {
      type: "list",
      message: "What sort of license is applied to your application?",
      name: "license",
      choices: [
        "Apache 2.0",
        "Boost 1.0",
        "BSD 2 (Simplified)",
        "BSD 3 (Revised)",
        "Creative Commons Zero 1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU General Public License 3.0",
        "GNU Affero General Public License 3.0",
        "GNU General Public License 2.0",
        "GNU Lesser General Public License 2.1",
        "MIT License",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "list",
      message: "How can people contribute to your project",
      name: "contributing",
      choices: [
        "Please don't make any contributions right now.",
        "Please contact me before making any contributions.",
        "Please contact me before making any major contributions.",
        "This application is open for your contributions.",
      ],
    },
    {
      type: "input",
      message: "How to test this app?",
      name: "test",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Don't know? Enter TBA and fix it up later.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your gitHub username?",
      name: "username",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Don't know? Enter TBA and fix it up later.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Don't know? Enter TBA and fix it up later.");
        }
        return true;
      },
    },
  ])
  .then(function (response) {
    console.log("Your README file will be created in the 'Created_ReadMe_Files' folder")
    console.log("Don't forget to create your licence file in GitHub!")
    fs.writeFileSync(   
      "./Created_ReadMe_Files/README_" + capitalise(response.title).split(' ').join('_') + ".md", // Empty README file created
      // Start of README template literal to populate data
      `# ${response.title}

<img src="https://img.shields.io/badge/Licence-${(response.license).split(' ').join('%20')}-${colour}"> //test


## Table of Contents
* [Description](#description)
* [Files](#files)
* [Installation](#installation)
* [Usage](#usage)
* [Design](#design)
* [License](#license)
* [Contributing Guidelines](#contributing-guidelines)
* [Testing Instructions](#testing-instructions)
* [Questions](#questions)

## Description

${response.description}

## Files

This applictaion is made up of: ${response.files}

## Installation
${response.installation}

## Usage
${response.usage}

## Design
${response.design}

## License
This application has ${response.license} applied.

## Contributing Guidelines
${response.contributing}

If can contribute to this project, please follow these simple rules:
* Write bug reports with detail, background, and sample code
* Make sure commits have appropriate 
* All changes are covered under ${response.license} applied to this appliction
* Please respect the authors request if they do not want contributions on this project. 

## Testing Instructions
${response.test}

## Questions
Conatct me on gitHub at https://github.com/${response.username} or email me at ${response.email} for any questions about ${response.title}.

` // End of README template literal
    ); // End of README writer
  });
