import React, { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

import "./Header.css"
const Header = ({ pageName }) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);


    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    console.log(pageName);
    return (
        <div className={scroll ? "mainHeader scroll" : "mainHeader pt-5"}>
            <div className="row">
                <div className="col-md-8">
                    <div className="leftSide">
                        <div className="subheading">
                            <HomeIcon className="icon" />
                            <h5>/ {pageName == ''? "Dashboard": pageName}</h5>
                        </div>
                        <h2> {pageName == ''? "Dashboard": pageName}</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="rightSide">

                        <div className="serach">
                            <div className="serachdivefirst">
                                <div className="box">
                                    <SearchIcon />
                                </div>
                                <div className={isActive ? 'inputbox inputBoxFocus' : 'inputbox'}>
                                    <input placeholder="Type here..." type="text" defaultValue onFocus={handleClick} />
                                </div>
                            </div>
                        </div>
                        <div className="signInbox">
                            <AccountCircleIcon className="icon" />
                            <h5>Sign In</h5>
                            <SettingsIcon className="icon" />
                            <NotificationsIcon className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;