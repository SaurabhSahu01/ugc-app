import { db } from "@/src/utils/db";

export default async function handler(req, res){
    if(req.method === "POST"){
        let data = JSON.parse(req.body);
        let year = `${data.year}-${data.month}`
        await db.collection(data.subject).doc('CATEGORY').collection(data.category).doc(year).set({
            AsstProfCutOffPercentile: data.APCP,
            AsstProfTotal: data.APTot,
            JRFAsstProfCutOffPercentile: data.JAPCP,
            JRFAsstProfTotal: data.JAPTot,
            Year: year
        }, {merge: true}).then(res => {
            res.status(200).json({
                status: 200,
                message: "success",
                data: data
            })
        })
    }
    else{
        res.status(403).json({
            status: 403,
            message: "only POST method allowed"
        })
    }
}