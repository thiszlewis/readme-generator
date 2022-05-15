// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "give the description of the project",

    },
    {
        type: "input",
        name: "contents",
        message: "what are the contents?",
    },
    {
        type: "input",
        name : "project",
        message:"what is the project about?"

    },

    {
      type:"input",
      name:"github",
      message:"what is your github username?"
    },

    {
        type:"input",
        name:"email",
        message:"what is your email address?"
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("readme.md",generateMarkdown(data),(err) => {
        if (err) {
            return console.log(err);
        }
        console.log("README.MD file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    try{
        // prompt Inquirer questions     
        inquirer.prompt(questions).then((data)=>{
            console.log(data);
            writeToFile("./README.MD",data)   
         });   
     } catch(error)
         {
             console.log(error)
         }
     
    }  

  
    


    

    
// Function call to initialize app
init();

