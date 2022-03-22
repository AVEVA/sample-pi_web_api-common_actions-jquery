# PI Web API JQuery Sample

**Version:** 1.0.27

[![Build Status](https://dev.azure.com/osieng/engineering/_apis/build/status/product-readiness/PI-System/osisoft.sample-pi_web_api-common_actions-jquery?repoName=osisoft%2Fsample-pi_web_api-common_actions-jquery&branchName=main)](https://dev.azure.com/osieng/engineering/_build/latest?definitionId=2662&repoName=osisoft%2Fsample-pi_web_api-common_actions-jquery&branchName=main)

The sample code in this folder demonstrates how to utilize the PI Web API in jQuery. You must have already [downloaded jQuery](https://jquery.com/download/) in order to run this sample application.

## Getting Started

To run the sample code:

- The sample code was developed to run in the Chrome browser
- Clone the GitHub repository
- Open Visual Studio Code
- Open the folder in which you placed the code
- Open the file: `launch.json`
- Search for the text "**url**":, change this to the path to `index.html`. For example:

```json
"url": "file:///C:/PI Web API/JQuery/index.html",
```

- Install Debugger for Chrome extension
- Click "Start Debugging" on the Debug menu

## Getting Started with Tests

To run the sample tests:

- You must have [Karma](https://karma-runner.github.io/latest/index.html) installed in order to run automated tests.
  - You can install this in \JQuery\KarmaUnitTests with `npm install karma –-save-dev`
- The sample test is configured using the file [appsettings.placeholder.json](KarmaUnitTests\appsettings.placeholder.json). Before editing, rename this file to `appsettings.json`. This repository's `.gitignore` rules should prevent the file from ever being checked in to any fork or branch, to ensure credentials are not compromised.
- Open the test config file `appsettings.json`
- Replace the values with your system configuration.

For example:

```json
{
  "PIWebAPI": "PLACEHOLDER_REPLACE_WITH_PI_WEB_API_URL",
  "AFServerName": "PLACEHOLDER_REPLACE_WITH_AF_SERVER_NAME",
  "DataArchiveName": "PLACEHOLDER_REPLACE_WITH_DATA_ARCHIVE_NAME",
  "Username": "PLACEHOLDER_REPLACE_WITH_USERNAME",
  "Password": "PLACEHOLDER_REPLACE_WITH_PASSWORD",
  "AuthType": "basic",
  "DEFAULT_TIMEOUT_INTERVAL": null
}
```

- If you run into any issues with the Jasmine tests timing out, use the `DEFAULT_TIMEOUT_INTERVAL` setting in `appsettings.json` and set it to a higher value. For example:

```javascript
DEFAULT_TIMEOUT_INTERVAL: 10000;
```

- Open the file: `launch.json`
- Search for the text "url":, change this to the path to SpecRunner.html. For example:

```json
"url": "file:///C:/PI Web API/JQuery/JasmineUnitTests/SpecRunner.html",
```

- From \Query\KarmaUnitTests run tests with `karma start`

## System Configuration

In order to run this sample, you must configure PI Web API with the proper security to:

- Create an AF database
- Create AF categories
- Create AF templates
- Create AF elements with attributes
- Create PI Points associated with element attributes
- Write and read element attributes
- Delete all the above AF/PI Data Archive objects

In addition, PI Web API must be configured to allow CORS as follows:

| Attribute               | Value                                               | Type    |
| ----------------------- | --------------------------------------------------- | ------- |
| CorsExposedHeaders      | Allow,Content-Encoding,Content-Length,Date,Location | String  |
| CorsHeaders             | \*                                                  | String  |
| CorsMethods             | \*                                                  | String  |
| CorsOrigins             | [http://localhost:9876](http://localhost:9876)      | String  |
| CorsSupportsCredentials | True                                                | Boolean |
| DisableWrites           | False                                               | Boolean |

On your client machine running this code, it is assumed that you have configured the system to trust the certficate used by PI Web API.

If you don't you will see an error similar to this in the Result box on the webpage:

```shell
Error finding server: undefined
```

## Functionality

This sample shows basic functionality of the PI Web API, not every feature. The sample is meant to show a basic sample application that uses the PI Web API to read and write data to a PI Data Archive and AF. Tests are also included to verify that the code is functioning as expected.

The functionality included with this sample includes(recommended order of execution):

- Create an AF database
- Create a category
- Create an element template
- Create an element and associate the element's attributes with PI tags where appropriate
- Write a single value to the attribute
- Write 100 values to an attribute
- Perform a Batch (6 steps in 1 call) operation which includes:
  - Get the sample tag
  - Read the sample tag's snapshot value
  - Read the sample tag's last 10 recorded values
  - Write a value to the sample tag
  - Write 3 values to the sample tag
  - Read the last 10 recorded values from the sample tag only returning the value and timestamp
- Return all the values over the last 2 days
- Return timestamp and values over the last 2 days
- Delete the element
- Delete the element template
- Delete the sample database

---

For the main PI Web API Samples landing page [ReadMe](https://github.com/osisoft/OSI-Samples-PI-System/tree/main/docs/PI-Web-API-Docs)  
For the main PI System Samples landing page [ReadMe](https://github.com/osisoft/OSI-Samples-PI-System)  
For the main OSIsoft Samples landing page [ReadMe](https://github.com/osisoft/OSI-Samples)   