import { pipeline } from 'stream';
import fs from 'fs';
import csv from 'csvtojson';

const BASE_CSV_PATH = "./files/csv/csv.csv";
const BASE_CSV_TEXT = "./files/text/text.txt";

pipeline(
  csv({
    noheader: false,
    headers: ["book", "author", "amount", "price"],
    ignoreColumns: /(Amount|amount)/
  })
    .fromFile(BASE_CSV_PATH),
  fs.createWriteStream(BASE_CSV_TEXT),
  err => console.error(err)
)

