import { pipeline } from 'stream';
import  {createWriteStream} from 'fs';
import csv from 'csvtojson';

pipeline(
    csv({
      noheader: false,
      headers: ["book", "author", "amount", "price"],
      ignoreColumns: /(Amount|amount)/
    })
      .fromFile('./files/csv/csv.csv'),
    createWriteStream("./files/text/text1.txt"),
  (err) => console.log(err)
)
