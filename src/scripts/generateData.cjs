const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const data = {};
const questData = [];



fs.createReadStream(path.resolve(__dirname, '..', "data", 'quests.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
        // console.log(row);
        questData.push(row)
    }).on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`);
        data["quests"] = questData;
        try {
            // convert JSON object to a string
            const dataStr = JSON.stringify(data, null, 4)
          
            // write file to disk
            fs.writeFileSync(path.resolve(__dirname, '..', "data", 'quests.json'), dataStr, 'utf8')
            console.log(`File is written successfully!`)
          } catch (err) {
            console.log(`Error writing file: ${err}`)
          }
    });