import React from "react";
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom';
// import {pic} from "./../../../public/assets/sidebarnav.png";

const Sidebar = ({ onPageChange }) => {
    const handlePageClick = (name) => {
        onPageChange(name);
    };

    return (
        <>

            <div className="topsider">

                <div className="mainSidebar">


                    <div className="sidebarheader" >
                        VISION UI FREE
                    </div>

                    <hr className="" />
                    <ul className="uistyle">
                        <Link to="/" onClick={() => handlePageClick('Home')}>
                            <li className="listyle mb-3">
                                <div className="lifirstDiv">
                                    <div className="liIcon">
                                        <HomeIcon className="icon" />
                                    </div>
                                    <div className="litext">
                                        <h6>Dashboard
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <Link to="/table" onClick={() => handlePageClick('Table')} >
                            <li className="listyle mb-3">
                                <div className="lifirstDiv">
                                    <div className="liIcon">
                                        <BarChartIcon className="icon" />
                                    </div>
                                    <div className="litext">
                                        <h6>Tables
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <Link to="/billing" onClick={() => handlePageClick('Billing')}>

                            <li className="listyle mb-3">
                                <div className="lifirstDiv">
                                    <div className="liIcon">
                                        <CreditCardIcon className="icon" />
                                    </div>
                                    <div className="litext">
                                        <h6>Billing
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        
                        <span className="deadline">Account Pages</span>

                        <Link to="/profile" onClick={() => handlePageClick('Profile')}>

                            <li className="listyle mb-3">
                                <div className="lifirstDiv">
                                    <div className="liIcon">
                                        <PersonIcon className="icon" />
                                    </div>
                                    <div className="litext">
                                        <h6>Profile
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <Link to="/signin" onClick={() => handlePageClick('Sing In')}>
                            <li className="listyle mb-3">
                                <div className="lifirstDiv">
                                    <div className="liIcon">
                                        <InsertDriveFileIcon className="icon" />
                                    </div>
                                    <div className="litext">
                                        <h6>Sign In
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <a aria-current="page" className="active " href="/signup">
                            <li className="listyle mb-3">
                                <div className="lifirstDiv">
                                    <div className="liIcon">
                                        <RocketLaunchIcon className="icon" />
                                    </div>
                                    <div className="litext">
                                        <h6>Sign Up
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                    <div>

                    </div>

                    <div className="gradient"><div><div ><span aria-hidden="true">star</span></div><div><h6 >Need help?</h6><div><span >Please check our docs</span></div><a tabindex="0" href="" target="_blank" rel="noreferrer">DOCUMENTATION</a></div><br></br></div></div>
                    <a href="" className="button7" role="button">Upgrade to Pro</a>
                    {/* <button onClick={handleButtonClick}>Update Header</button> */}
                </div>
            </div>

        </>
    )
}

export default Sidebar;