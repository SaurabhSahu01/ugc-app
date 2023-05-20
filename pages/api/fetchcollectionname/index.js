import { db } from "@/src/utils/db"

export default async function handler(req, res){
    if(req.method === "GET"){
        let data = []
        let collection = db.listCollections()
        collection.then(collections => {
            collections.forEach((collection) => {
               data.push(collection.id);
            })
            res.status(200).json({
                status: 200,
                message: "data fetched succesfully",
                data: data
            })
        })
    }
    else{
        res.status(403).json({
            status: 403,
            message: "only GET allowed"
        })
    }
}