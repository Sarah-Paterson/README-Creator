// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your application?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your application?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How should your application be installed?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
      },
      {
        type: 'list-input',
        name: 'license',
        message: 'Select license used for this application.',
        choices: [
            'Apache 2.0',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'CC BY 4.0',
            'CC BY-SA 4.0',
            'CC BY-NC 4.0',
            'CC BY-ND 4.0',
            'CC BY-NC-SA 4.0',
            'CC BY-NC-ND 4.0',
            'EPL-1.0',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'IBM',
            'MIT',
            'Mozilla',
            'BY',
            'ODbL',
            'PDDL',
            'Perl',
            'Artistic',
            'Zlib',
        ]
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution guidelines.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
      },
];

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ])
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
