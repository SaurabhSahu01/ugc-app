import { db } from "./db";

export default async function(data, year){
    // data.Subject
    // data.Category
    // data['Assistant Professor'] -> first
    // data.__EMPTY -> second
    // data['Jrf & Assistant Professor'] -> first
    // data.__EMPTY_1 -> second

    function replaceSlashSemicolon(string){
        return string.replaceAll(/[\/;]/g,'-');
    }

    let subject = replaceSlashSemicolon(data?.Subject.toUpperCase());
    let category = data?.Category.toUpperCase()
    return await db.collection(subject).doc('CATEGORY').collection(category).add({
        AsstProfCutOffPercentile: data['Assistant Professor'],
        AsstProfTotal: data.__EMPTY,
        JRFAsstProfCutOffPercentile: data['JRF & Assistant Professor'],
        JRFAsstProfTotal: data.__EMPTY_1,
        Year: year
    })
}