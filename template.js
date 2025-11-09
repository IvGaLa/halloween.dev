import {
  existsSync,
  mkdirSync,
  writeFile,
  appendFile,
  readFileSync,
  writeFileSync,
} from 'fs';
import { resolve } from 'path';

let [year, day, ext = 'js'] = process.argv.slice(2);

const PACKAGES_JSON = './package.json';

const _year = Number(year); // Used for validations
const _day = Number(day); // Used for validations

const showError = (errorNumber, err) => {
  console.log(err);

  const errors = [];
  errors[0] =
    'Please, use: npm run YEAR DAY EXT\nWhere: YEAR is year in full number (YYYY), DAY is the number of the day xD and EXT the file extension (js/ts).';
  errors[1] = 'YEAR must be greater than 2015.';
  errors[2] = 'DAY must be between 1 and 31.';
  errors[3] = 'Error writing files.';
  errors[4] = 'Cannot read/write packages.json file.';
  console.log(errors[errorNumber]);
  process.exit(0);
};

if (Number.isNaN(_year) || Number.isNaN(_day)) showError(0);
if (_year < 2015) showError(1);
if (_day < 1 || _day > 31) showError(2);

day = day.padStart(2, '0');

const writePackagesJson = (scriptToInsert) => {
  const { scriptName, scriptCommand } = scriptToInsert;

  try {
    const packageData = readFileSync(PACKAGES_JSON, 'utf-8');
    const packageJson = JSON.parse(packageData);

    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts[scriptName] = scriptCommand;

    const updatedPackageData = JSON.stringify(packageJson, null, 2);
    writeFileSync(PACKAGES_JSON, updatedPackageData, 'utf-8');
  } catch (error) {
    showError(4);
  }
};

const createYearDirectory = (dirPath) => {
  const fullPath = resolve(process.cwd(), dirPath);
  if (!existsSync(fullPath)) mkdirSync(fullPath, { recursive: true });
};

const createFile = (filename, input = '') => {
  existsSync(filename)
    ? appendFile(filename, input, (err) => {
        if (err) showError(3);
      })
    : writeFile(filename, input, (err) => {
        if (err) showError(3);
      });
};

const templateString = `/*
 */
`;
const scriptFilename = `index.${ext}`;
const scriptDir = `${year}/${day}`;

const newScriptPackagesJson = {
  scriptName: `${year}:${day}`,
  scriptCommand: `nodemon ${scriptDir}/${scriptFilename}`,
};

createYearDirectory(scriptDir); // Create destination directory
createFile(`${scriptDir}/${scriptFilename}`, templateString); // Create script file
writePackagesJson(newScriptPackagesJson); // Write new packages script section

console.log(`Created script.\nYou can run 'npm run ${year}:${day}'`);
