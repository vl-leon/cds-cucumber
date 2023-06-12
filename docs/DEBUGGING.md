# Debugging

The following document describes how to debug the steps-implementation, server-side and browser code using VSCode.

## Steps

Debugging the steps-implementation with VSCode has two possibilities.

### VSCode JavaScript Debug Termninal

Use the follwing command to start javascript debug terminal:
Keyboard-shortcut: *Ctrl+Shift+P*
Command: *Debug: JavaScript Debug Treminal*

Now you can add breakpoints in the steps code and start the tests in the new terminal tab.

### Launch target configuration

File: ./.vscode/launch.json

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Cucumber Feature",
      "type": "node",
      "request": "launch",
      "program": "npx",
      "args": ["cucumber-js","test/features/sflight"],
      "env": {
        "CWD": "${workspaceFolder}",
        "CDS_USERNAME": "alice",
        "CDS_PASSWORD": "admin",
        "CDS_SERVICE_DIR":"tmp/cap-sflight",
        "CUCUMBER_PUBLISH_ENABLED":"false",
        "CUCUMBER_PUBLISH_QUIET":"true"
      },
      "skipFiles": [
        "<node_internals>/**"
      ],
      "outputCapture": "console",
      "console":"integratedTerminal"
    }
  ]
}
```

Add breakpoints in the steps code and run the new target in the "Run and Debug" tab of VSCode.
You can add additional cucumber-js arguments as you wish, and also change the environment variables to values applicable for your project.

## Server-side

This section describes the possibilities to debug the CDS Nodejs Runtime.
The CDS Server will be started as a new process via the provided steps.
In order to debug the code, you can follow the same procedure as for the [Steps](#steps) then you can add breakpoints in the CDS Nodejs Runtime code.

## Browser

VSCode offers attaching and debugging of browser sessions.
Add a new launch configuration as follows:

File: ./.vscode/launch.json

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "name": "Bookshop: Attach to browser",
      "request": "attach",
      "port": 9222,
      "webRoot": "${workspaceFolder}/tmp/cloud-cap-samples/fiori/app",
      "urlFilter": "http://localhost:4004/*"
    }
  ]
}
```

Description of the parameters:
- port - browser debugger port to attach to. By default is is 9222, but you can change it via the enviromnent variables.
- webRoot - webserver root directory containing root folder webpages
- urlFilter - filter to help locating the webpage to attach to. The port 4004 is the default port of the CDS Server which can be changed via the environment variables.

When the tests are started with debugging enabled, after the CDS server is started and selenuim is initialized, the execution of the steps will wait until the VSCode Debugger is attached.