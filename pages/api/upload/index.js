import formidable from 'formidable';
import addToDatabase from '@/src/utils/addToDatabase';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadHandler = async (req, res) => {
  if (req.method === "POST") {

    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        res.status(500).json({ message: 'Error uploading file' });
      } 
      else {
        if (files.file) {
          addToDatabase(files.file).then(response => {
            res.status(200).json({
              staus: 200,
              message: "data added succesfully"
            })
          })
        }
        else {
          res.status(400).json({
            status: 400,
            message: 'No file uploaded'
          });
        }
      }
    });
  }
  else {
    res.status(403).json({
      status: 403,
      message: "only POST requests"
    })
  }
};

export default uploadHandler;
