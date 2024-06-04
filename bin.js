#!/usr/bin/env node
const yargs = require('yargs');
const { InstallComponent } = require('./installComponent');
const { Print, PRINT_TYPE } = require('./Console');
const path = require("path"); // Or `import fs from "fs";` with ESM

let vars = yargs.argv;
let args = vars["_"]
let cmd = args[0];
args = args.slice(1, args.length);

let project_location = process.cwd();
const COMPONENT_PATH = path.join(vars.$0, "../components")

Print(PRINT_TYPE.MSG, `BruCL - Bruer Component Library`)
Print(PRINT_TYPE.DEBUG,
`
Running Command: ${cmd}
CWD: "${project_location}"
ARGS:`, args,
"\n"
)


if (cmd == "install") {
    let comp_name = args[0];
    InstallComponent({
        comp_name,
        project_location,
        COMPONENT_PATH
    })
}