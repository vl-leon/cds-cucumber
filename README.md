# CDS Cucumber FE

Behavior Driven Development enables you to provide exactly what the customers want.
The cucumber project provides framework for that.
This repository contains cucumber step definitions for UI (Fiori Elements) specifications.

# Usage


Make sure you have a CAP project or create a new one with the following command,
which requires global installation of the [CAP development toolkit](https://cap.cloud.sap/docs/get-started/#local-setup): *npm i -g @sap/cds-dk*
```
cds init --add samples
```

In addition the latest version of the **chrome browser** should be present on the system.

## Install

```
npm i git+https://github.com/cap-js/cds-cucumber-fe.git
```

## Configure

```
npx cds-add-cucumber-fe
```

## Add tests

File: test/features/first.feature
```
Feature: Fiori preview page

  Scenario: Open first Fiori preview page
    Given we have started the application
      And we have opened the url "/"
    When we click on first Fiori preview page
      And we perform basic search for "one"
    Then we expect to have 1 table records
```

For more information on the available steps see the [documentation](API.md).

## Run the tests

```
npx cucumber-js test
```

For additional information see the [details](DETAILS.md) page.
