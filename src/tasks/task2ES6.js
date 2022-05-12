import { pipeline } from 'stream';
import fs from 'fs';
import csv from 'csvtojson';
import paths from './constants';
import util from './errors';

const writeText = fs.createWriteStream(paths.BASE_CSV_TEXT2);

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
      .subscribe((jsonObj) => {
        delete jsonObj['amount'];
      })
      .on('error', util)
  )
}

write();
