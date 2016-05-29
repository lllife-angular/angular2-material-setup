#!/bin/sh

jspm install npm:$* --dev
npm install --save-dev $*
