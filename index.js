const fs = require("fs");
const inquirer = require("inquirer");
const hello = "hello"

function capitalize(value) {
  return value.toUpperCase();
 }

 var myArray = [
  "Apples",
  "Pears"
];

 var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


// getlicence function - to rephrase licenses
// if else to rewrite licence in right format

// function getlicence() {
//   if (response.license === "Apache License 2.0" ){
//     // return "apache";
//     console.log("apache");
//   }
// }


// OR

// Dcitionary
// var dictionary = {
// "Apache License 2.0" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
// "GNU General Public License v3.0" : "",
// "MIT License" : "",
// "BSD 2-Clause 'Simplified' License" : "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
// "BSD 3-Clause 'New' or 'Revised' License" : "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
// "Boost Software License 1.0" : "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
// "Creative Commons Zero v1.0 Universal" : "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
// "Eclipse Public License 2.0" : "",
// "GNU Affero General Public License v3.0" : "",
// "GNU General Public License v2.0" : "",
// "GNU Lesser General Public License v2.1" : "",
// "Mozilla Public License 2.0" : "",
// "The Unlicense" : "",
// }




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
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "How can people contribute to your project",
      name: "contributing",
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
    // if (response.license === "Apache License 2.0"){
    //   $getLicence = "Apache";
    // } else if (response.license === "GNU General Public License v3.0"){
    //   $getLicence = "GNU";
    // }
    // console.log(getLicence);
    console.log(response.title);
    console.log(response.username);
    console.log(randomItem)
    fs.writeFileSync(
      "./Created_ReadMe_Files/README_" + capitalize(response.title).split(' ').join('_') + ".md",
      `# ${response.title}

[![License]${hello}-blue.svg)]
${randomItem['Apples'] ? 'Apache!' : 'other!'}

https://img.shields.io/github/license/dukewilki/weather-buddy

## Table of Contents
* [Description](#description)
* [Files](#files)
* [Installation](#installation)
* [Usage](#usage)
* [Design](#design)
* [License](#license)
* [Contributing](#contributing)
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
${response.license}

## Contributing
${response.contributing}

## Testing Instructions
${response.test}

## Questions
Conatct me on gitHub at https://github.com/${response.username} or email me at ${response.email} for any questions about ${response.title}

` // End of README template literal
    ); // End of README writer
  });
