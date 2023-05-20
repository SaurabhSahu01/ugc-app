import React from 'react'
import Image from 'next/image';
import fileIcon from "../../public/fileicon.png";

function AddUpload() {
    const [file, setFile] = React.useState(null);
    const [filename, setFilename] = React.useState(null);

    function handleChange(e) {
        setFilename(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    function handleFileSubmit() {
        console.log("submitting the form data");
        const formData = new FormData();
        console.log(formData)
        formData.append('file', file);
        fetch('/api/upload', {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='h-full flex flex-col justify-center items-center gap-5'>
                <span className='text-xl font-bold text-blue-500'>Upload an Excel File </span>
                {filename && <div className='flex flex-col justify-center items-center'>
                    <Image src={fileIcon} alt='file icon' width={70} height={70} />
                    <span className='text-sm font-semibold'>{filename}</span>
                </div>}
                {!filename && <div className='flex flex-col justify-center items-center'>
                    <label htmlFor="files" className='bg-blue-500 p-2 rounded-md text-white'>Select File</label>
                    <input id="files" style={{ visibility: "hidden" }} type="file" accept='.xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' onChange={handleChange} />
                </div>}
                {filename && <div className='flex flex-row justify-center items-center gap-3'>
                    <span className='bg-slate-100 p-2 rounded-md cursor-pointer' onClick={() => {
                        setFilename(null);
                        setFile(null);
                    }}>Cancel</span>
                    <span className='bg-blue-500 p-2 rounded-md text-white cursor-pointer' onClick={() => handleFileSubmit()}>Upload</span>
                </div>}
            </div>
            <div>
                <span className='text-xl font-bold text-blue-500'>-----OR-----</span>
            </div>
            <div className='h-full'>
                <span className='text-xl font-bold text-blue-500'>Add a Data</span>
            </div>
        </div>
    )
}

export default AddUpload