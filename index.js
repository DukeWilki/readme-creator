const fs = require ('fs');

// READ FILE
// fs.readFile('hello.txt', 'utf-8', function(err, data){
//     fs.writeFileSync('writeMe.txt', data);
// });


const inquirer = require("inquirer");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
      validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a title, you can always change it later if you change your mind!");
        }
        return true;
    }
    
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
    }
    },
    {
      type: "input",
      message: "Are there any instructions on how to install?",
      name: "installation"
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
        }
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
        "The Unlicense"
      ]
    },
    {
      type: "input",
      message: "How can people contribute to your project",
      name: "contributing"
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
    }
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
    }
    },
  ])
  .then(function(response) {
    console.log(response.title);
    console.log(response.username);
    fs.writeFileSync('README_ ' +response.title + '.md', (
      `# ${response.title}
## Files
This applictaion is mad up of: ${response.files}

## Table of Contents
* [Files](#files)
* [Installation](#installation)
* [Usage](#usage)
* [Design](#design)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

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

## Tests
TBA

## Questions
Conatct me on gitHub ${response.username} or email me at ${response.email} for any questions about ${response.title}

`
      
    )
    );
  })

  // async function writer() {
  //   try {
  //       const { answer } = await inquirer.prompt({
  //       });
    
  //       fs.writeFileSync('WriteMe' + answer.title + '.txt', "hello");
  //       console.log(answer);
      
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
    




    




//   writer();

//   function writer(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//           return console.log(err);
//         }
      
//         console.log("created md file")
//     });
// }
//   fs.writeFileSync(answer.title + '_ReadMe_.md', '# ' + answer.title);

//     fs.writeFileSync('ReadMe_'+ answer.title + '.md', '# ' + answer.title + '## Installation' + \ + '<p>' + answer.installation + '</p>');
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## Installation <br> <p>' + answer.installation + '</p>', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## Usage', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.usage + '</p>!', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## Design', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.design + '</p>!', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## License', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.license + '</p>!', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## Contributors' , function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.contributors + '</p>', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## FAQ', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.questions + '</p>', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## GitHub User!', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.username + '</p>', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '## Hellocontent!', function(err) { if (err) throw err;
    // });
    // fs.appendFile('ReadMe_'+ answer.title + '.txt', '<p>' + answer.installation + '</p>', function(err) { if (err) throw err;
    //   });
        // console.log('boom2')
// });

  // CREATE FILE
// fs.writeFileSync('WriteMe.txt', "hello");
