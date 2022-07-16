import util from "util";
import { exec as execC } from "child_process";

const exec = util.promisify(execC);
const command =
  "curl -sL https://raw.githubusercontent.com/venikx/venikx/master/business-card | sh";

exec(command)
  .then(({ stdout, stderr }) => {
    if (stderr) {
      throw new Error(stderr);
    } else {
      console.error(stdout);
    }
  })
  .catch(console.error);
