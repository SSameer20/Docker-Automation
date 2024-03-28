import React, { useEffect, useState } from 'react'
import '../style/container.css'
import usage from '../data/cpu_usage';
import mem from '../data/cpu_memory.json'
import { FaRunning, FaRegStopCircle } from "react-icons/fa";
import { MdNotStarted } from "react-icons/md";

export default function Containers() {
    const [cpu, setCpu] = useState([]);
    const [memory, setMemory] = useState([]);

    useEffect(() => {
        setCpu(usage);
        setMemory(mem);
    })




    return (
        <div className='container'>
            <p className='title' style={{margin:"0px 50px"}}><bold>System Overview &nbsp;</bold> | <bold> &nbsp; Container Overview</bold></p>

            <div className="container-data" id='cpu_usage'>
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
                            cpu.map((item) => {
                                return <div className="row">
                                    <p>{item['Container Id']}<span>&nbsp;<button style={{ padding: "5px", background: "none" }}><FaRunning style={{ width: '15px', height: '15px', color: "white" }} /></button><button style={{ padding: "5px", background: "none" }}>&nbsp;<MdNotStarted className='icon' style={{ width: '15px', height: '15px', color: "white" }} /></button><button style={{ padding: "5px", background: "none" }}>&nbsp;<FaRegStopCircle className='icon' style={{ width: '15px', height: '15px', color: "white" }} /></button></span></p>
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

            <div className="container-data" id='cpu_memory'>
                <p id="section-title">Container Memory Stats [Metricbeat System]</p>

                <div className="table">
                    <div className="table-title">

                        <p>Container ID</p>
                        <p>Process name</p>
                        <p>Usage</p>
                        <p>Max usage</p>
                        <p>Page faults</p>
                        <p>Pages in memory</p>
                        <p>Pages out of memory</p>
                        <p>Major page faults</p>
                        <p>Failures</p>
                        <p>Huge pages</p>
                        <p>Swap caches</p>
                        <p>Swap usa</p>
                        <p>Block I/O</p>

                    </div>

                    <div className="table-data">
                        {
                            memory.map((item) => {
                                return <div className="row">
                                    <p>{item["Container ID"]}</p>
                                    <p>{item['Process name']}</p>
                                    <p>{item['Usage']}</p>
                                    <p>{item['Max usage']}</p>
                                    <p>{item['Page faults']}</p>
                                    <p>{item['Pages in memory']}</p>
                                    <p>{item['Pages out of memory']}</p>
                                    <p>{item['Inactive']}</p>
                                    <p>{item['#Major page faults']}</p>
                                    <p>{item['Failures']}</p>
                                    <p>{item['TCP buffers']}</p>
                                    <p>{item['Huge pages']}</p>
                                    <p>{item['Swap caches']}</p>
                                    <p>{item['Swap usa']}</p>
                                    <p>{item['Block I/O']}</p>
                    
                                </div>
                            })
                        }
                    </div>


                </div>

            </div>

        </div>
    )
}
