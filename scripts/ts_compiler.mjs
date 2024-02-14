import {exec} from "child_process";
import fs from 'fs/promises'
import * as path from "path";
async function compileTS (dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
         if (dirent.isDirectory() && !res.includes('node_modules') ) {
            await compileTS(res);
        } else if (dirent.name.includes('.ts') && res.includes('Layer')) {
            await execShellCommand(`npx tsc ` + dirent.path + '/' + dirent.name);
            console.log(dirent)
        }
    }
}

function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}

(async ()=> {
    const buildDirectory = process.argv[3] || '.aws-sam/build';
    await compileTS(buildDirectory)
})();
