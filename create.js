const fs = require ('fs');
fs.writeFile('WriteTHIS.txt')

// fs.appendFile("WriteMe.txt", "# " + answer.title +"\n", function (err) {
//     if (err) {console.log(err);
//     } else {console.log("Title added");
//     }
// })


fs.appendFile("WriteTHIS.txt", "# TITLE" + "\n" +
'## Contents' + "\n" +
'* [Files](#files)' + "\n" +
'* [Installation](#installation)' + "\n" +
'* [Usage](#usage)' + "\n" +
'* [Design](#design)' + "\n" +
'* [License](#license)' + "\n" +
'* [Contributing](#contributing)' + "\n" +
'* [Questions](#questions)' + "\n" +

'# Files' + "\n" +


'# Installation' + "\n" +


'# Usage' + "\n" +


'# Design' + "\n" +


'# License' + "\n" +


'# Contributing' + "\n" +


'# Questions' + "\n", function (err) {
        if (err) {console.log(err);
        } else {console.log("Title added");
        }
    });


