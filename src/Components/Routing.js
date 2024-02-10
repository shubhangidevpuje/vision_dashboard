import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMainSection from './Pages/Homecomponsts/HomeMainSection';
import TopTableSection from './Pages/TableComponets/TopTableSection';
import BillingComponents from './Pages/BillingComponents/TopBillingSection';
import RTL from './Pages/RTL/RTLSection';
import ProfileComponents from './Pages/ProfileComponents/ProfileSection';
import SignInComponents from './Pages/SignInComponents/SigninSection';
import SignUpComponents from './Pages/SignUpComponents/SignupSection'
import Sidebar from './MainComponents/Sidebar';
import Header from './MainComponents/Header';
import Footer from './MainComponents/Footer';
import UserHeader from './MainComponents/UserHeader';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Routing = () => {
    const [pageName, setPageName] = useState(window.location.pathname.replace("/", ""));

    const handlePageChange = (name) => {
        setPageName(name);
    };
    // 👇 Get route data
    console.log(pageName);
    return (
        <>
            <Router>
                <div className='MainBackground'>
                    {pageName === 'signin' || pageName === 'Sing In' || pageName === 'signup' ?
                        < >

                            <UserHeader pageName={pageName} onPageChange={handlePageChange}/>
                            <Switch>
                                <Route path="/signin" component={SignInComponents}></Route>
                                <Route path="/signup" component={SignUpComponents}></Route>

                            </Switch>
                        </>
                        :
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-2 position-relative'>
                                    <Sidebar onPageChange={handlePageChange} />
                                </div>
                                <div className='col-md-10'>
                                    <Header pageName={pageName} />

                                    <Switch>
                                        <Route exact path="/" component={HomeMainSection}></Route>
                                        <Route path="/table" component={TopTableSection}></Route>
                                        <Route path="/billing" component={BillingComponents}></Route>
                                        <Route path="/rtlsection" component={RTL} ></Route>
                                        <Route path="/profile" component={ProfileComponents} ></Route>

                                    </Switch>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Router>
        </>
    )
}

export default Routing