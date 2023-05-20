import addData from "./addData";
import xlsx from "xlsx";

export default async function addToDatabase(file){
    // path to the file uploaded on the server
    const filePath = file.filepath;
    // reading the excel file
    const excelfile = xlsx.readFile(filePath);
    // names of all the sheets in the excel file
    const sheetNames = excelfile.SheetNames
    // all the sheets in the excel file
    const sheets = excelfile.Sheets;
    
    for(let i = 0; i < sheetNames.length; i++){
      let temp = xlsx.utils.sheet_to_json(sheets[sheetNames[i]]);
      let year = sheetNames[i];
      temp.forEach((res, index) => {
        if(index !== 0){
          addData(res, year);
        }
      })
    }
}