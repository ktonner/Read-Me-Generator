function generateMarkdown(data) {
  return `
# ${data.title}
## ${data.desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

##Test
${data.test}

##Questions
If you have any questions, contact ${data.username} on GitHub.
![GitHub profile pic](${imageURL})

`;
}

module.exports = generateMarkdown;
