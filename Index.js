const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');

const employeeInfoArray = [];

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numRegEx = /^[1-9]*\d$/

const promptManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the manager's name! (Required)",
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("\nYou must enter a name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's ID! (Required)",
                validate: (idInput) => {
                    if(idInput.match(numRegEx)) {
                        return true;
                    }else{
                        console.log('\nYou must enter the ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the team manager's email address! (Required)",
                validate: (emailInput) => {
                    if (emailInput.match(emailRegEx)) {
                        return true;
                    } else {
                        console.log('\nPlease enter a valid email address!');
                        return false;
                    }
                }
            },
            {
				type    : 'input',
				name    : 'officeNo',
                message : "Please enter the team manager's office number",
                validate : (officeInput) => {
                    if (officeInput.match(numRegEx)) {
                        return true;
                    } else {
                        console.log("\nPlease enter a NUMBER");
                        return false;
                    }
                }
			}
		])
		.then((data) => {
			const { name, id, email, officeNo } = data;
			const manager = new Manager(name, id, email, officeNo);
			const managerOutput = {
				role     : manager.getRole(),
				name     : manager.getName(),
				id       : manager.getId(),
				email    : manager.getEmail(),
				wildcard : manager.getOfficeNumber()
			};
			employeeInfoArray.push(managerOutput);
			promptMenu();
		});
        
}

const promptMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuChoice',
                message: "Please enter the next team member's position or complete your team!",
                choices: ['Engineer', 'Intern', 'Complete']
            }
        ])

        .then((data) => {
            if (data.menuChoice === 'Engineer') {
                promptEngineer();
            } else if (data.menuChoice === 'Intern') {
                promptIntern();
            } else {
                const pageHTML = generatePage(employeeInfoArray);

                return writeFile(pageHTML)
                    .then((writeFileRes) => {
                        console.log(writeFileRes);
                        return copyFile;
                    })
                    .then((copyFileRes) => {
                        console.log(copyFileRes);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
        });
};

const promptEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the engineer's name! (Required)",
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    }else {
                        console.log("\nEnter the engineer's name, please!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message:"Please enter the engineer's ID! (Required)",
                validate: (idInput) => {
                    if (idInput.match(numRegEx)) {
                        return true;
                    } else {
                        console.log('\nEnter an ID, please!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the engineer's email address! (Required)",
                validate: (emailInput) => {
                    if(emailInput.match(emailRegEx)) {
                        return true;
                    }else{
                        console.log("\nYou must enter an valid email!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the engineer's GitHub username! (Required)",
                validate: (githubInput) => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log("\nYou must enter a valid GitHub username!")
                        return false;
                    }
                }
            }

        ])
        .then((data) => {
            const {name, id, email, github} = data;
            const engineer = new Engineer(name, id, email, github);
            const engOutput = {
                role: engineer.getRole(),
                name: engineer.getName(),
                id: engineer.getId(),
                email: engineer.getEmail(),
                wildcard: engineer.getGithub()
            };
            employeeInfoArray.push(engOutput);
            promptMenu();
        });
};

const promptIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the intern's name! (Required)",
                validate: (nameInput) => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("\nYou must enter a name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the intern's ID! (Required)",
                validate: (idInput) => {
                    if(idInput.match(numRegEx)) {
                        return true;
                    } else {
                        console.log('\nYou must enter an ID!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the intern's email address! (Required)",
                validate: (emailInput) => {
                    if(emailInput.match(emailRegEx)) {
                        return true;
                    } else {
                        console.log('\n You must enter a valid email address!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school! (Required)",
                validate: (schoolInput) => {
                    if(schoolInput) {
                        return true;
                    }else{
                        console.log("\nYou must enter a school name!");
                        return false;
                    }
                }
            }
        ])
        .then((data) => {
            const {name, id, email, school} = data;
            const intern = new Intern(name, id, email, school);
            const internOutput = {
                role: intern.getRole(),
                name: intern.getName(),
                id: intern.getId(),
                email: intern.getEmail(),
                wildcard: intern.getSchool()
            };
            employeeInfoArray.push(internOutput);
            promptMenu();
        });
};

console.log("Hello, please answer the following questions to begin building your team!");
promptManager();