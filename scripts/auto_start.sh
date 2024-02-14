#!/bin/bash
sam build && node ./scripts/ts_compiler.mjs && sam local start-api --warm-containers EAGER -p 8095 -n env.json --debug
