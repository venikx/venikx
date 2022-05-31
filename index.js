import fs from 'fs'

fs.readFile('./info.json', 'utf8', logInfo)

function logInfo(err, data) {
  if (err) {
    return console.error(err);
  }
  console.info(data);
}
