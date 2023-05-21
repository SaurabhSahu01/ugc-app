import React from 'react'
import fileIcon from "../../public/fileicon.png";
import FadeLoader from "react-spinners/FadeLoader";

function AddUpload() {
    const [loading, setLoading] = React.useState(false);
    const [file, setFile] = React.useState('');
    const [filename, setFilename] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');
    const [APCP, setAPCP] = React.useState('');
    const [APTot, setAPTot] = React.useState('');
    const [JAPCP, setJAPCP] = React.useState('');
    const [JAPTot, setJAPTot] = React.useState('');

    function handleChange(e) {
        setFilename(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    function handleFileSubmit() {
        // console.log("submitting the form data");
        const formData = new FormData();
        // console.log(formData)
        formData.append('file', file);
        fetch('/api/upload', {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(finalresponse => {
                setLoading(false);
                // console.log(finalresponse.message);
            })
            .catch(err => console.log(err))
    }

    function handleDataSubmit() {
        setLoading(true);
        fetch('/api/uploaddata', {
            method: "POST",
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject: subject,
                month: month,
                year: year,
                category: category,
                APCP: APCP,
                APTot: APTot,
                JAPCP: JAPCP,
                JAPTot: JAPTot
            })
        }).then(res => res.json())
            .then(data => {
                setAPCP('');
                setAPTot('');
                setCategory('');
                setJAPCP('');
                setJAPTot('');
                setMonth('');
                setYear('');
                setSubject('');
                setLoading(false);
                // console.log(data.data);
            })
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
                    <input type="text" onChange={(e) => setSubject(e.target.value.toUpperCase())} value={subject} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Category</span>
                    <input type="text" onChange={(e) => setCategory(e.target.value.toUpperCase())} value={category} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Year</span>
                    <input type="text" onChange={(e) => setYear(e.target.value.toUpperCase())} value={year} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-row justify-center items-center gap-3'>
                    <span>Month</span>
                    <input type="text" onChange={(e) => setMonth(e.target.value.toUpperCase())} value={month} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                </div>
                <div className='flex flex-col justify-center items-start gap-3 py-2'>
                    <span className='text-xl font-semibold tracking-widest'>Assistant Professor</span>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Cut-off percent</span>
                        <input type="text" onChange={(e) => setAPCP(e.target.value.toUpperCase())} value={APCP} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Total</span>
                        <input type="text" onChange={(e) => setAPTot(e.target.value.toUpperCase())} value={APTot} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-3 py-2'>
                    <span className='text-xl font-semibold tracking-widest'>JRF & Assistant Professor</span>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Cut-off percent</span>
                        <input type="text" onChange={(e) => setJAPCP(e.target.value.toUpperCase())} value={JAPCP} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <span>Total</span>
                        <input type="text" onChange={(e) => setJAPTot(e.target.value.toUpperCase())} value={JAPTot} className='outline-none border-blue-400 border-[0.5px] rounded-md p-2'></input>
                    </div>
                </div>
                <span className={`p-2 text-white rounded-md ${(year && month && subject && category && APCP && APTot && JAPCP && JAPTot) ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300 cursor-not-allowed'}`} onClick={() => (year && month && subject && category && APCP && APTot && JAPCP && JAPTot) && handleDataSubmit()}>Submit</span>
            </div>
        </div>
    )
}

export default AddUpload