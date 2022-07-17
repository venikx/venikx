#!/usr/bin/env node

import util from "util";
import { exec as execC } from "child_process";

const exec = util.promisify(execC);
const command = "./business-card";

exec(command)
  .then(({ stdout, stderr }) => {
    if (stderr) {
      throw new Error(stderr);
    } else {
      console.error(stdout);
    }
  })
  .catch(console.error);
