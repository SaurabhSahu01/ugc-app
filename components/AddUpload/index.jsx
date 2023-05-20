import React from 'react'
import fileIcon from "../../public/fileicon.png";
import FadeLoader from "react-spinners/FadeLoader";

function AddUpload() {
    const [loading, setLoading] = React.useState(false);
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
            .then(data => {
                console.log(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='flex flex-col justify-around items-center min-h-screen'>
            {loading && <div className='w-full min-h-screen z-50 fixed top-0 bg-white/80 flex items-center justify-center'>
                <FadeLoader
                    color={"#42b9f5"}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>}
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
                    <span className='bg-blue-500 p-2 rounded-md text-white cursor-pointer' onClick={() => {
                        setLoading(true);
                        handleFileSubmit();
                    }}>Upload</span>
                </div>}
            </div>
            <div>
                <span className='text-xl font-bold text-blue-500'>-----OR-----</span>
            </div>
            <div className='h-full w-full flex flex-col justify-center items-start gap-5 p-4 m-2 bg-blue-50'>
                <span className='text-xl font-bold text-blue-500 text-center'>Add a Data</span>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Subject</span>
                    <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Category</span>
                    <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Year</span>
                    <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Month</span>
                    <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-col justify-center items-start gap-3 py-2'>
                    <span className='text-xl font-semibold tracking-widest'>Assistant Professor</span>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Cut-off percent</span>
                        <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Total</span>
                        <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-3 py-2'>
                    <span className='text-xl font-semibold tracking-widest'>JRF & Assistant Professor</span>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Cut-off percent</span>
                        <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Total</span>
                        <input type="text" onChange={(e) => e.target.value = e.target.value.toUpperCase()} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                </div>
                <span className='p-2 text-white bg-blue-500 rounded-md'>Submit</span>
            </div>
        </div>
    )
}

export default AddUpload