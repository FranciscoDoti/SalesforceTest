# README

This is a test automation framework designed by Francisco Doti Texeira. It is built using Javascript and uses Selenium and Cucumber to facilitate test automation. It is also designed to be integrated with any continuous integration tool such as Jenkins.

## Prerequisites

- Node.js
- Git
- Chrome or Firefox browser

## Getting Started

To get started, clone the repository to your local machine using the command:

git clone https://github.com/yourusername/yourproject.git


Once the repository is cloned, navigate to the project directory and install the dependencies using the command:

npm install

## Running the Tests

To run the tests, use the command:

npm run test


This will execute the tests using the Selenium and Cucumber framework. The tests will run in either Chrome or Firefox browser depending on the configuration in the `config.js` file.

## Generating Reports

To generate reports for the test results, use the command:

npm run generateReport


This will generate an HTML report in the `reports` directory.

## Integrating with CI/CD tools

This framework is designed to be easily integrated with any continuous integration or continuous delivery tool such as Jenkins. Simply configure your CI/CD tool to execute the `npm run test` command to execute the automated tests as part of your build and deployment process.

## Conclusion

This test automation framework provides a robust and reliable way to automate tests using Selenium and Cucumber. Its integration with continuous integration and delivery tools make it a valuable addition to any development project.



