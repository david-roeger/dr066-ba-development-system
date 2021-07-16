const fs = require("fs");
const del = require("del");

let base = "../";
let whitelist = ["public", "purge", "index.js", "package.json", "README.md"];
async function run() {
  await deleteFile(`${base}.storybook`);
  await deleteFile(`${base}package.json`);
  await deleteFile(`${base}node_modules`);

  fs.readdir(base, (err, files) => {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(async (file) => {
      return await purgeFolder(file, base);
    });
  });
}

async function purgeFolder(file, path) {
  if (file[0] === "." || whitelist.includes(file)) {
    return;
  }
  // delete all top level files
  if (file.includes(".")) {
    if (useRegex(path)) {
      if (file.includes(".mdx") || file.includes(".stories")) {
        return await deleteFile(`${path}${file}`);
      }
      return;
    }
    return await deleteFile(`${path}${file}`);
  }

  fs.readdir(`${path}${file}`, (err, files) => {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(async (f) => {
      return await purgeFolder(f, `${path}${file}/`);
    });
  });
}

async function deleteFile(path) {
  console.log(path);
  return await del(path, { force: true });
}

function useRegex(input) {
  let regex = /(\/src\/)([a-zA-Z]+)/;
  return regex.test(input);
}

function copyPackage() {
  fs.readFile("package.json", "utf8", (err, data) => {
    if (err) {
      return console.log("Unable to read file: " + err);
    }

    fs.writeFile(`${base}package.json`, data, "utf8", (err) => {
      if (err) {
        return console.log("Unable to write file: " + err);
      }
    });

    return console.log("copied");
  });
}

async function go() {
  await run();
  copyPackage();
}

go();
