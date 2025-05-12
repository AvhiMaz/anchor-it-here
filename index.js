#!/usr/bin/env node

const { execSync } = require("child_process");
const { basename } = require("path");

const dirName = basename(process.cwd());

try {
  console.log(`running: anchor init ${dirName}`);
  execSync(`anchor init ${dirName}`, { stdio: "inherit" });

  console.log("moving project files to current directory...");
  execSync(`cp -a ${dirName}/. .`, { stdio: "inherit" });

  console.log("cleaning up temp directory...");
  execSync(`rm -rf ${dirName}`, { stdio: "inherit" });

  console.log("anchor project initialized in current directory.");
} catch (err) {
  console.error("failed:", err.message);
  process.exit(1);
}
