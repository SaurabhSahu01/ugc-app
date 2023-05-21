import { db } from "@/src/utils/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        let responseData = [];
        let data = JSON.parse(req.body)
        let docs = db.collection(data.subject).doc('CATEGORY').collection(data.category);
        docs.get().then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                responseData.push(doc.data());
            });
            res.status(200).json({
                status: 200,
                message: "docs fetched",
                data: responseData
            })
        }).catch(err => {
            console.log("some error")
            res.status(403).json({
                status: 403,
                message: "can't fetch docs"
            })
        })
    }
    else {
        res.status(403).json({
            status: 403,
            message: "only POST allowed"
        })
    }
}