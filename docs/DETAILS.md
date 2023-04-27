# Detailed information

## Initiaizaton

Initialization of the steps library is triggered via the command:
```
npx cds-addcucumber-ui
```

It will perform the following operations:
1. create cucumber configuration file ./cucumber.yml containing the following settings:

- enable **publishQuiet** to suppress message
- **require** steps module

2. create directory for feature specifications: ./test/features
3. create directory for own steps: ./test/features/step_definitions
4. create configuration for cucumber plugin: ./.vscode/settings.json

## Add your own steps

In addition to the provided steps you can add your own steps in your repository.
By default they should be located in the following folder:

```
test/features/step_definitions
```

## VSCode Cucumber(Gherkin) plugin

In order to get support (like code completion) for VSCode when writing your specifications, you can install the following plugin:
[Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## Information about the used webdriver

The selenium-webdriver nodejs module is used to controll the browser and it requires a webdriver. The version of the webdriver should match the version of the web browser. The node module [chromedriver](https://www.npmjs.com/package/chromedriver) is used to download the latest webdriver version automatically. Both modules are listed in the dependencies of this module.

Most systems are configured to update the browser automatically which requires also an update of the webdriver.
You can update the chrome webdriver to the latest version with the following command:
```
npm install chromedriver --chromedriver_version=LATEST
```

## Selenium in docker

In cases where the browser is not installed or can not be started (CI),
you can run selenium and the corresponding browser in docker as follows:

- start selenium docker container

```
docker run -d --network host selenium/standalone-chrome
```

By default the selenium/standalone-chrome image opens the port 4444 to access the webdriver.

- start the tests passing the selenium remote url as an environment variable:

```
SELENIUM_REMOTE_URL="http://127.0.0.1:4444/wd/hub" npx cucumber-js test
```