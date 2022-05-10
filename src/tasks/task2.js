const { pipeline } = require('stream');
const fs = require('fs');
const csv = require('csvtojson');
const paths = require('./constants');
const util = require('./errors');

const writeText = fs.createWriteStream(paths.BASE_CSV_TEXT);

async function write() {
  await pipeline(
    csv().fromFile(paths.BASE_CSV_PATH).preFileLine((fileLineString,  lineIdx)=>{
      if (lineIdx === 0) {
        return fileLineString.replace('Book,Author,Amount,Price', 'book,author,amount,price');
      }
      return fileLineString})
      .on('data',(data)=> {
        writeText.write(data)
      })
      .on('error', util)
  )
}

write();
