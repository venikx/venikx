const fs = require('fs')

fs.readFile('./info.json', 'utf8', function (err,data) {
  if (err) {
    return console.error(err);
  }
  console.info(data);
});
