// TODO: Include packages needed for this application

//const dependencies created
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utlities/generateMarkdown")
// TODO: Create an array of questions for user input

//Questions to be asked for creating your readme
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Projects Title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please descripe if any, the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the application?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please make a list of all contributers"
    },
    {
        type: "input",
        name: "tests",
        message: "Any tests that are needed to add?"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a licence you would like to use:",
        choices: ["Apache",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "ODbl"],
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email adress: "
    }
];

// TODO: Create a function to write README file
//Function to write readme
function writeToFile(fileName, data) {
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
  fs.writeFileSync(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  )
}

// TODO: Create a function to initialize app
//async function added 
async function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const results = generateMarkdown(answers)
      writeToFile("README.md", results)
    })
    .catch((error) => {
      console.log(error)
    })
}
// Function call to initialize app
init();
