import React from 'react'

function Table({data}) {
  return (
    <div className='w-screen mt-5'>
        <div className='w-full h-fit flex justify-center items-center gap-2 bg-slate-50 border-[1px] border-black font-medium'>
            <div className='h-fit py-3 border-r-[1px] border-black flex'>
                <span className='bg-green-100'>Year</span>
            </div>
            <div className='w-[1/3] flex flex-col justify-around items-center border-r-[1px] border-black'>
                <span className='bg-blue-100'>Asst. Prof.</span>
                <div className='w-full flex justify-around items-center'>
                    <span className='bg-yellow-100'>CutOff Mark/%</span>
                    <span className='bg-red-100'>Total</span>
                </div>
            </div>
            <div className='w-[1/3] flex flex-col justify-around items-center'>
                <span className='bg-blue-100'>JRF & Asst. Prof.</span>
                <div className='w-full flex justify-around items-center'>
                    <span className='bg-yellow-100'>CutOff Mark/%</span>
                    <span className='bg-red-100'>Total</span>
                </div>
            </div>
        </div>
        {
            data?.map((item) => {
                return(
                    <div className='grid grid-cols-5 place-items-center border-[0.5px] border-black text-sm gap-2 py-2'>
                        <span className='bg-green-100'>{item.Year}</span>
                        <span className='bg-yellow-100'>{item.AsstProfCutOffPercentile}</span>
                        <span className='bg-red-100'>{item.AsstProfTotal}</span>
                        <span className='bg-yellow-100'>{item.JRFAsstProfCutOffPercentile}</span>
                        <span className='bg-red-100'>{item.JRFAsstProfTotal}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Table