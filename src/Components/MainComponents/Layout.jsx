import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import MainComponents from "./MainComponents";
import Header from "./Header";
import Routing from "../Routing";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";


const Layout = () => {
    const [pageName, setPageName] = useState('');

    const handlePageChange = (name) => {
        setPageName(name);
    };

    return (
        <>
            <div className='MainBackground'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2 position-relative'>
                            <Sidebar onPageChange={handlePageChange} />
                        </div>
                        <div className='col-md-10'>
                            <Header pageName={pageName} />
                            <Routing />
                            {/* <MainComponents /> */}
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;