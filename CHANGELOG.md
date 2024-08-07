# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Version 0.4.3 - 2024-xx-xx

### Added
### Changed
### Removed
### Fixed

## Version 0.4.2 - 2024-07-24

### Fixed

* process management - set TEMP and TMPDIR environment variables for @cap-js-community/odata-v2-adapter

## Version 0.4.1 - 2024-07-23

### Changed

* dependencies: make @sap/cds a peer dependency

### Fixed

* process management - set TMP environment variable for @cap-js-community/odata-v2-adapter

## Version 0.4.0 - 2024-06-05

### Added

* server-side code-coverage
* OData:
  - support protocol version 2: *Given we require communication protocol "odata-v2"*
  - perform actions: *When we execute action {word} with payload*

## Version 0.3.9 - 2024-04-30

### Added

* cds-add-cucumber - create an example github actions workflow file

### Fixed

* UI - skip InvisibleText elements

## Version 0.3.8 - 2024-03-12

### Fixed

* UI: 1.121.0 onfocusin requires target

## Version 0.3.7 - 2024-02-13

### Added

* Environment variable: CDS_CUCUMBER_BROWSER=chrome|firefox

### Changed

* Browser: default browser set to 'firefox' when Application Studio is detected

### Removed

* Environment variable: CDS_CUCUMBER_FIREFOX

### Fixed

* Secure working directory removal

## Version 0.3.6 - 2024-02-05

### Fixed

* Plugin: generated test using removed step
* Documentation: README referencing removed step

## Version 0.3.5 - 2024-02-05

### Added

* Documentation: environment variable CDS_COMMAND_ARGn

### Removed

* Steps *Given we have started the CAP application*  
  alternative: *Given we have started the application*

### Fixed

* selenium-webdriver: add option *--headless*

## Version 0.3.4 - 2024-01-17

### Added

* Firefox support enabled via environment variable CDS_CUCUMBER_FIREFOX=1

### Fixed

* OData: retrieve service path via annotation "@path"

## Version 0.3.3 - 2023-11-21

### Added
* UI: enable SAP UI5 1.120.1
* cds-add-cucumber: create vscode extensions recommendation file when missing

### Changed
* chromedriver: changed dependency to "latest"
* UI: reuse TableUtils when selecting rows in ValueHelp dialogs

### Fixed
* Security issue in axios - dependency tree update

## Version 0.3.2 - 2023-10-31
### Fixed

* OData: expectation step "its {word} to be {word}"
* UI: "modify field" step

## Version 0.3.1 - 2023-10-13
### Fixed

* service
  - terminate service process
  - home directory for Windows OS

## Version 0.3.0 - 2023-09-28
### Changed

* UI
  - step "modify field" extended with ValueHelp dialog support
* node
  - require engine >= 18

## Version 0.2.1 - 2023-09-20
### Added

* Windows OS support
* UI
  - enable CORS
  - specify Accept-Language
* OData
  - expectation for count(*) result

### Changed

* Simplified "Getting started" guide
* UI
  - step "we select one row in value help dialog" does not clear the previous selection

### Removed

* UI
  - step "we select additional row in value help dialog"

### Fixed

* UI
  - step "we select one row in value help dialog" works with all target UI5 versions
* temporary directory creation when running in parallel

## Version 0.2.0 - 2023-09-06

### Added

* OData steps

### Changed

* Readme: switch to bookshop sample "cds add sample"

### Fixed

* Readme: install from npm repository
* Plugins:
  - reject failing commands
  - hide test plugins
* Concurrency:
  - allow cucumber parallel jobs: `npx cucumber-js test --parallel 2`
  - create new working directory (username and process ID dependent) using it as follows:
    - Chrome: user data directory
    - CAP services: home directory
* Steps:
  - detect technical issues when selecting tiles
  - detect missing ValueHelp popup
  - add new step: remove ValueHelp selection
  - locating active dialog
* cucumber:
  - remove deprecated configuration: publishQuiet

## Version 0.1.0 - 2023-07-10

### Added

- Initial version
