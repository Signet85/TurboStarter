// check-deprecated.js

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
const deprecatedPackages = Object.entries(data.packages)
    .filter(([_, details]) => details.deprecated)
    .map(([name, details]) => `${name}:\n${details.deprecated}\n`);

console.log(deprecatedPackages.join(''));