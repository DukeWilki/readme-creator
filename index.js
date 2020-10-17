var fs = require ('fs');

// READ FILE
// fs.readFile('hello.txt', 'utf-8', function(err, data){
//     fs.writeFileSync('writeMe.txt', data);
// });


var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: "What files are included in your project?",
      name: "files"
    },
    {
      type: "input",
      message: "Installation instructions?",
      name: "installation"
    },
    {
      type: "input",
      message: "How do you use your application?",
      name: "usage"
    },
    {
      type: "list",
      message: "What sort of license is applied to your application?",
      name: "license",
      choices: [
        "email",
        "phone",
        "telekinesis"
      ]
    },
    {
      type: "list",
      message: "Were there any other contributors to your project",
      name: "others",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "input",
      message: "questions",
      name: "questions"
    },
    {
      type: "input",
      message: "What is your gitHub username?",
      name: "username"
    }
  ])



  // CREATE FILE
fs.writeFileSync('WriteMe.txt', "hello");
