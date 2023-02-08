const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


function parseQuests() {
  return new Promise( (resolve, reject) => {
    const questData = [];
    fs.createReadStream(path.resolve(__dirname, '..', "data", 'quests.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', error => {
        console.error(error);
        reject();
      }).on('data', row => {
          const val = row["name"].toLowerCase();
          row["id"] = `quest-${val.replaceAll(" ", "-")}`
          questData.push(row)
      }).on('end', rowCount => {
          console.log(`Parsed ${rowCount} rows`);
          resolve(questData);
      });
  });
}

function parseItems() {
  return new Promise( (resolve, reject) => {
    const data = [];
    fs.createReadStream(path.resolve(__dirname, '..', "data", 'items.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', error => {
        console.error(error);
        reject();
      }).on('data', row => {
          const val = row["name"].toLowerCase();
          row["id"] = `item-${val.replaceAll(" ", "-")}`
          data.push(row)
      }).on('end', rowCount => {
          console.log(`Parsed ${rowCount} rows`);
          resolve(data);
      });
  });
}

function parseCollectables() {
  return new Promise( (resolve, reject) => {
    const data = [];
    fs.createReadStream(path.resolve(__dirname, '..', "data", 'collectables.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', error => {
        console.error(error);
        reject();
      }).on('data', row => {
          const token = row["name"] || row["location"] || row["secondary_type"]
          const val = token.toLowerCase();
          row["id"] = `collectable-${row["type"]}-${val.replaceAll(" ", "-")}`
          data.push(row)
      }).on('end', rowCount => {
          console.log(`Parsed ${rowCount} rows`);
          resolve(data);
      });
  });
} 

// generateQuests()

Promise.all([parseQuests(), parseItems(), parseCollectables()]).then( (values) => {
  const questData = values[0];
  const itemData = values[1];
  const collectableData = values[2];
  try {
    const data = {};
    data["quests"] = questData;
    data["items"] = itemData;
    data["collectables"] = collectableData;
    
    // convert JSON object to a string
    const dataStr = JSON.stringify(data, null, 4)
  
    // write file to disk
    fs.writeFileSync(path.resolve(__dirname, '..', "data", 'checklistdata.json'), dataStr, 'utf8')
    console.log(`File is written successfully!`)
  } catch (err) {
    console.log(`Error writing file: ${err}`)
  }

}).catch( (err) => {
  console.error(err)
})