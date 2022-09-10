// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//Licence badges added
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// License Links

function renderLicenseLink(license) {
  if (license === 'Apache') {
    return `https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'GNU') {
    return `https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'ISC') {
    return `https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC` 
  }
  if (license === 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT` 
  }
  if (license === 'Mozilla') {
    return `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0` 
  }
  if (license === 'ODbl') {
    return `https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/` 
  }
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Collaborators
  
 ${data.credits}
  
  ## License
  
  This project is licensed under the ${data.license}
  
  ## Badges
  
  ${renderLicenseSection(data.license)}
  ## Questions
  
  * [Github](https://github.com/${data.github})
  * For any more questions, reach me at my [email](${data.email})
  
  ## Contributing
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
`;
}

module.exports = generateMarkdown;



