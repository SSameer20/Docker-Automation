import React, { useState } from 'react'
import '../style/container.css'

export default function Containers() {
    // const [data, setData] = useState([]);

    const data = [
        {
            'Container Id': "user.qwer1234",
            'Process name': "process-1",
            'CPU user': 34567890,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 12345678,
        },
        {
            'Container Id': "user.asdf5678",
            'Process name': "process-2",
            'CPU user': 90876543,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 87654321,
        },
        {
            'Container Id': "user.zxcv9012",
            'Process name': "process-3",
            'CPU user': 56789012,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 21098765,
        },
        {
            'Container Id': "user.poiuy3456",
            'Process name': "process-4",
            'CPU user': 123456789,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 98765432,
        },
        {
            'Container Id': "user.lkjh7890",
            'Process name': "process-5",
            'CPU user': 67890123,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 32109876,
        },
        {
            'Container Id': "user.hjkl1234",
            'Process name': "process-6",
            'CPU user': 234567890,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 10987654,
        },
        {
            'Container Id': "user.gfed5678",
            'Process name': "process-7",
            'CPU user': 78901234,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 43210987,
        },
        {
            'Container Id': "user.tyuio9012",
            'Process name': "process-8",
            'CPU user': 345678901,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 11098765,
        },
        {
            'Container Id': "user.rewq2345",
            'Process name': "process-9",
            'CPU user': 89012345,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 54321098,
        },
        {
            'Container Id': "user.asdfg6789",
            'Process name': "process-10",
            'CPU user': 45678901,
            'CPU quota': 0,
            'CPU throttling': 0,
            'CPU kernel': 12109876,
        },
    ];

    return (
        <div className='container'>
            <div className="container-data">
                <p id="section-title">Container CPU Usage [Metric System]</p>

                <div className="table">
                    <div className="table-title">
                        
                            <p>Container ID</p>
                            <p>Process name</p>
                            <p>CPU user</p>
                            <p>CPU quota</p>
                            <p>CPU throttling</p>
                            <p>CPU kernel</p>
                    
                    </div>

                    <div className="table-data">
                        {
                            data.map((item) => {
                                return <div className="row">
                                    <p>{item['Container Id']}</p>
                                    <p>{item['Process name']}</p>
                                    <p>{item['CPU user']}</p>
                                    <p>{item['CPU quota']}</p>
                                    <p>{item['CPU throttling']}</p>
                                    <p>{item['CPU kernel']}</p>
                                </div>
                            })
                        }
                    </div>


                </div>

            </div>
        </div>
    )
}
