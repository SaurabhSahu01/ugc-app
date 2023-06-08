import React from 'react'
import styles from "./styles.css";
function Table({ data }) {
    return (
        <div className='min-w-[800px] max-w-[1500px] mx-auto'>
            <table className='w-full'>
                <tr>
                    <th rowspan="2">Year</th>
                    <th colspan="2">Assistant Prof</th>
                    <th colspan="2">JRF</th>
                </tr>
                <tr>
                    <th>Cut-off Marks/%/%ile</th>
                    <th>Total</th>
                    <th>Cut-off Marks/%/%ile</th>
                    <th>Total</th>
                </tr>
                {
                    data?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Year}</td>
                                <td>{item.AsstProfCutOffPercentile}</td>
                                <td>{item.AsstProfTotal}</td>
                                <td>{item.JRFAsstProfCutOffPercentile}</td>
                                <td>{item.JRFAsstProfTotal}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Table