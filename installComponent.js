const { Print, PRINT_TYPE } = require('./Console');
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const path = require("path"); // Or `import fs from "fs";` with ESM

function InstallComponent({comp_name, project_location, COMPONENT_PATH}) {
    Print(PRINT_TYPE.MSG, `installing "${comp_name}"`)
    let src_location = path.join(project_location, "src");
    console.log(src_location)
    if (fs.existsSync(src_location) == false) return
    let comp_location = path.join(src_location, "components");
    console.log(comp_location)
    if (fs.existsSync(comp_location) == false) return
    console.log("Path Exists")
    console.log("copy", path.join(COMPONENT_PATH, comp_name), comp_location)
    fs.cpSync(
        path.join(COMPONENT_PATH, comp_name),
        path.join(comp_location, comp_name),
        { recursive: true }
    );
}

module.exports = {
    InstallComponent
}