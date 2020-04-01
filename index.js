const generateMarkdown = require("./utils/generateMarkdown")
var inquirer = require("inquirer")
var axios = require("axios")
const fs = require("fs")

// Require all npm packages and files

const questions = [
    // questions to user using "inquirer"
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Give a short description of your project.",
        name: "desc"
    },

    {
        type: "input",
        message: "What needs to be done to install your project?",
        name: "install"
    },

    {
        type: "input",
        message: "Write instructions for using your project.",
        name: "usage"
    },

    {
        type: "input",
        message: "How can people contribute?",
        name: "contribution"

    },

    {
        type: "input",
        message: "How would someone test the application?",
        name: "test"
    }

];
//answers.username

function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers)
            axios.get("https://api.github.com/users/" + answers.username)
                .then(response => {
                    console.log(response)
                    var imageURL = response.data.avatar_url
                    answers.image = imageURL;
                    console.log(imageURL);
                    fs.writeFile("README.md", generateMarkdown(answers), function (err) {
                        if (err) {
                            throw err;
                        }})
                })
            })

            // Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.

        }
    

init();
