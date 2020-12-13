// const created to references external files & modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
/* const created to define the name of the produced file and
the path to where the file will be written*/
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//const to render functions defined inside seperate constructor classes
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
// varrible to store each indvidule inside an arrey that will print to the 'team.html' document
var allEmployees = [];
// function to prompt user is created 
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the employee'
        },
        {
            type: 'list',
            name: 'role',
            message: `Please select the employee's rols`,
            default: 'Intern',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter the employee's employee id`
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter the employee's email address`
        },
        {
            type: 'input',
            name: "officeNumber",
            message: "Please enter the Manager's office number",
            //only prompts 'Manager' is selected as the employee's role.
            when: (answer) => answer.role === "Manager"
        },
        {
            type: 'input',
            name: "gitHub",
            message: "Please enter the Engineer's GitHub user name",
            //only prompts 'Engineer' is selected as the employee's role.
            when: (answer) => answer.role === "Engineer"
        },
        {
            type: 'input',
            name: "school",
            message: "Please enter the Intern's Univercity",
            //only prompts 'Intern' is selected as the employee's role.
            when: (answer) => answer.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'additionalEmployee',
            message: 'Will you be adding additional employees?',
        }
    ])
        .then((answers) => {
            // switch created to replace questions based on selected emplyee role
            switch (answers.role) {
                case 'Manager':
                    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    allEmployees.push(manager);
                    console.log('Employee added successfully');
                    break;
                case 'Engineer':
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                    allEmployees.push(engineer);
                    console.log('Employee added successfully');
                    break;
                case 'Intern':
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    allEmployees.push(intern);
                    console.log('Employee added successfully');
                    break;
            }
            // allows for addiditional prompts for a new employee if user selects yes
            if (answers.additionalEmployee) {
                promptUser();
            // if user selects no then team.html will be created with the user's data
            } else {
                const renderHTML = render(allEmployees);
                fs.writeFile(outputPath, renderHTML, (err) => {
                    if (err) {
                        console.log(err);
                    }else{
                    console.log(`success! Your new html page is ready to veiw.\ncheck inside the 'otuput' folder`);
                    }
                })
            }
        })
// funtion initiated when app is ran the command line (node app.js)
promptUser();

