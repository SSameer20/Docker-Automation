import React from 'react'
import { FaRunning, FaRegStopCircle } from "react-icons/fa";
import { MdNotStarted } from "react-icons/md";
import '../style/automation.css'

export default function
    () {
    return (
        <div className='automation'>
            <div className="task-space">
                <div className="run" id='task'>
                    <FaRunning className='icon' style={{ width: '100px', height: '100px' }}  />
                    <button>RUN</button>
                </div>
                <div className="start" id='task'>
                    <MdNotStarted className='icon' style={{ width: '100px', height: '100px' }} />
                    <button>START</button>

                </div>
                <div className="stop" id='task'>
                    <FaRegStopCircle className='icon' style={{ width: '100px', height: '100px' }}  />
                    <button>STOP</button>
                </div>
            </div>

        </div>
    )
}
