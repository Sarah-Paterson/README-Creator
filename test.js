const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({projectTitle, description, installation, usage, license, licenseLink, contribute, tests, github, email}) =>
`# ${projectTitle} [![License: ${license}](${licenseLink})](${license})

## Description
${description}

---
---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

---
---

## Installation
${installation}

---

## Usage
${usage}

---

## License

### ${license}
Please see licensing documentation for more information.

---

## Contributing
${contribute}

---

## Tests
${tests}

---

## Questions
[${github} Github](https://github.com/${github})

If you have any further questions concerning this project, please feel free to contact me via email, ${email}.
`;

let licenseLink;

const getLicenseLink = () => {
  if (inquirer.license == 'Apache 2.0') {
    licenseLink = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
  if (inquirer.license  == 'BSD 3-Clause') {
    licenseLink = 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
  }
  if (inquirer.license  == 'BSD 2-Clause') {
    licenseLink = 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg'
  }
  if (inquirer.license  == 'CC BY 4.0') {
    licenseLink = 'https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg'
  }
  if (inquirer.license  == 'BY-SA 4.0') {
    licenseLink = 'https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg'
  }
  if (inquirer.license  == 'CC BY-NC 4.0') {
    licenseLink = 'https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg'
  }
  if (inquirer.license  == 'CC BY-ND 4.0') {
    licenseLink = 'https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg'
  }
  if (inquirer.license  == 'CC BY-NC-SA 4.0') {
    licenseLink = 'https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg'
  }
  if (inquirer.license  == 'CC BY-NC-ND 4.0') {
    licenseLink = 'https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg'
  }
  if (inquirer.license  == 'EPL-1.0') {
    licenseLink = 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
  }
  if (inquirer.license  == 'GNU GPL v3') {
    licenseLink = 'https://img.shields.io/badge/License-GPL%20v3-blue.svg'
  }
  if (inquirer.license  == 'GNU GPL v2') {
    licenseLink = 'https://img.shields.io/badge/License-GPL%20v2-blue.svg'
  }
  if (inquirer.license  == 'GNU AGPL v3') {
    licenseLink = 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg'
  }
  if (inquirer.license  == 'GNU LGPL v3') {
    licenseLink = 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg'
  }
  if (inquirer.license  == 'GNU FDL v1.3') {
    licenseLink = 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg'
  }
  if (inquirer.license  == 'IBM') {
    licenseLink = 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
  }
  if (inquirer.license  == 'MIT') {
    licenseLink = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  if (inquirer.license  == 'Mozilla') {
    licenseLink = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }
  if (inquirer.license  == 'BY') {
    licenseLink = 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg'
  }
  if (inquirer.license  == 'ODbL') {
    licenseLink = 'https://img.shields.io/badge/License-ODbL-brightgreen.svg'
  }
  if (inquirer.license  == 'PDDL') {
    licenseLink = 'https://img.shields.io/badge/License-PDDL-brightgreen.svg'
  }
  if (inquirer.license  == 'Perl') {
    licenseLink = 'https://img.shields.io/badge/License-Perl-0298c3.svg'
  }
  if (inquirer.license  == 'Artistic') {
    licenseLink = 'https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg'
  }
  if (inquirer.license  == 'Zlib') {
    licenseLink = 'https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib'
  }
  else {
    console.log("there was an error. please try agian");
  }
};

inquirer
  .prompt([
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
        type: 'list',
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
  ])
//   .then(getLicenseLink)
  .then((answers) => {
    const LicenseLink = getLicenseLink(answers);
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
