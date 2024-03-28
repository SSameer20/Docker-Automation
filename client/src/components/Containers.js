import React, { useEffect, useState } from 'react'
import '../style/container.css'
import usage from '../data/cpu_usage';
import { FaRunning, FaRegStopCircle } from "react-icons/fa";
import { MdNotStarted } from "react-icons/md";

export default function Containers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(usage);
    })

    

    
    return (
        <div className='container'>
            <p className='title'><bold>System Overview &nbsp;</bold> | <bold> &nbsp; Container Overview</bold></p>

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
                                    <p>{item['Container Id']}<span>&nbsp;<button style={{padding : "5px",background: "none"}}><FaRunning style={{ width: '15px', height: '15px', color:"white" }}  /></button><button style={{padding : "5px",background: "none"}}>&nbsp;<MdNotStarted className='icon' style={{ width: '15px', height: '15px', color:"white" }} /></button><button style={{padding : "5px",background: "none"}}>&nbsp;<FaRegStopCircle className='icon' style={{ width: '15px', height: '15px', color:"white" }} /></button></span></p>
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
