import React from 'react'
import './Service.css'
import { FaDesktop } from "react-icons/fa";
const Service = () => {
    return (
        <div className="service">
            <h2>Service</h2>
            <p>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non</p>
            <p>proident, sunt in culim id est.</p>
            <div className="card-section">
                <div className="card-row">
                    <div className="card">
                        <div className="icon">
                            <FaDesktop />
                        </div>
                        <h2>Web Development</h2>
                        <p>
                            Donec sed magna uspen disse ac males uasuda lacus orekom nipsume dolor
                            sit amet ectetur adip iscing elit eget ullamc dana.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaDesktop />
                        </div>
                        <h2>Rest API Development</h2>
                        <p>
                            Donec sed magna uspen disse ac males uasuda lacus orekom nipsume dolor
                            sit amet ectetur adip iscing elit eget ullamc dana.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaDesktop />
                        </div>
                        <h2>DeskTop App</h2>
                        <p>
                            Donec sed magna uspen disse ac males uasuda lacus orekom nipsume dolor
                            sit amet ectetur adip iscing elit eget ullamc dana.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service
