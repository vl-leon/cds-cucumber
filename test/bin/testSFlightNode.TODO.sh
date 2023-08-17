#!/bin/bash

export CUCUMBER_PUBLISH_ENABLED=false
export CUCUMBER_PUBLISH_QUIET=true

export CDS_USERNAME=alice
export CDS_PASSWORD=admin
export CDS_SERVICE_DIRECTORY=tmp/cap-sflight

npx cucumber-js test/features/sflight --tags "@todo"