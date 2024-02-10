import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Profile.css';
import FolderIcon from '@mui/icons-material/Folder';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function TabPanel(props) {
    const { children, value, index, ...other } = props;


}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {

}

const ProfileSection = () => {


    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <>
            <div className="ProfileSection">
                <div className="pt-4">
                    <div className="tablemain">
                        <div className="tablefirst">
                            <div className="setimg">
                                <div className="images"></div>
                                <div className="fleft"><span className="white">Mark Johnson <p className="lightgray">mark@simmmple.com</p></span> </div>

                                <Container  className='containenr'>
                                    <Tabs className='backgro'
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="primary"
                                        textColor="#fff"
                                        variant="fullWidth"

                                    >
                                        <Tab label="OVERVIEW" {...a11yProps(0)} />
                                        <Tab label="TEAMS" {...a11yProps(1)} />
                                        <Tab label="PROJECTS" {...a11yProps(2)} />
                                    </Tabs>
                                </Container>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="backgroundimage">
                            <h4 className="whites">Welcome back! </h4>
                            <p className="white"> Nice to see you, Mark Johnson!</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="backgrounds p-4">
                            <span className="white">Car Informations</span>
                            <p className="lightgray">Hello, Mark Johnson! Your Car is ready.</p>
                            <div className="col-md-6 mx-auto text-center">

                                <div className="d-flex justify-content-center CircularProgressbar">
                                    <CircularProgressbar value={value} maxValue={1}
                                        text={`${value * 100}%`}
                                    />
                                </div>
                                <h5 className="text-white">0h 58 min</h5>
                                <p className="lightgray">Time to full charge</p>
                            </div>

                            <div className="row pt-2">
                                <div className="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="float-end">
                                                    <div className="info">
                                                        <h4>Today's Money</h4>

                                                        <h5 className="infosecond">$53,000
                                                            <span className="green">
                                                                +55%
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="leftSide">
                                                    <div className="box">
                                                        <FolderIcon />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="float-end">
                                                    <div className="info">
                                                        <h4>Today's Money</h4>

                                                        <h5 className="infosecond">$53,000
                                                            <span className="green">
                                                                +55%
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="leftSide">
                                                    <div className="box">
                                                        <FolderIcon />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="float-end">
                                                    <div className="info">
                                                        <h4>Today's Money</h4>

                                                        <h5 className="infosecond">$53,000
                                                            <span className="green">
                                                                +55%
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="leftSide">
                                                    <div className="box">
                                                        <FolderIcon />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="float-end">
                                                    <div className="info">
                                                        <h4>Today's Money</h4>

                                                        <h5 className="infosecond">$53,000
                                                            <span className="green">
                                                                +55%
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="leftSide">
                                                    <div className="box">
                                                        <FolderIcon />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="background3 p-4">
                            <h5 className="white">Profile Information</h5><br></br>
                            <p className="lightgray">Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                            <p className="lightgray d-flex">Full Name: &nbsp;<p className="white"> Mark Johnson</p></p>
                            <p className="lightgray d-flex">Mobile: &nbsp;<p className="white">(44) 123 1234 123</p></p>
                            <p className="lightgray d-flex">Email: &nbsp;<p className="white"> mark@simmmple.com</p></p>
                            <p className="lightgray d-flex">Location: &nbsp;<p className="white"> United States</p></p>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-md-3">
                        <div className="bck p-4">
                            <h5 className="white">Platform Settings</h5><br></br>
                            <p className="account">ACCOUNT</p>
                            <div className="d-f">
                                <span className="lightgray">Email me when someone follows me</span>
                                <span className="lightgray">Email me when someone answers on my post</span>
                                <span className="lightgray">Email me when someone mentions me</span>
                            </div><br></br>
                            <div>
                                <p className="account">APPLICATIONS</p>
                                <span className="lightgray">New launches and projects</span>
                                <span className="lightgray">Monthly product updates</span>
                                <span className="lightgray">Subscribe to newsletter</span>
                                <span className="lightgray">Receive mails weekly</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 setbackground p-4">
                        <div className="">
                            <h5 className="white">Project</h5>
                            <span className="lightgray">Architects design houses</span>
                        </div><br></br>
                        <div className="row row-cols-1 row-cols-md-3 g-4 ">
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
                                    <div className="card-body">
                                        <p className="lightgray">Project #1</p>
                                        <h5 className="white">Modern</h5>
                                        <p className="lightgray">
                                            As Uber works through a huge amount of internal management turmoil.
                                        </p>
                                        <button className="buttonsSet">View All</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
                                    <div className="card-body">
                                        <p className="lightgray">Project #1</p>
                                        <h5 className="white">Scandinavian</h5>
                                        <p className="lightgray">Music is something that every person has his or her own specific opinion about.</p>
                                        <button className="buttonsSet">View All</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
                                    <div class="card-body">
                                        <p className="lightgray">Project #3</p>
                                        <h5 className="white">Minimalist</h5>
                                        <p className="lightgray">
                                            Different people have different taste, and various types of music.
                                        </p>
                                        <button className="buttonsSet">View All</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br>
        </>
    )
}

export default ProfileSection