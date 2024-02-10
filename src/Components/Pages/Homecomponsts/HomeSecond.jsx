import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const HomeSecond = () => {
    const value = 0.76;
    return (
        <>
            <div className="row pt-4">
                <div className="col-md-5">
                    <div className="card ">
                        <div className="card-body p-0">
                            <div className="bg-image">
                                  <h6 className="lightgray">welcome back</h6>
                                  <h2 className="white">Mark Johnson</h2>
                                  <span className="lightgray">Glad to see you again!<br/>Ask me anything.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card pb-5">
                        <div className="card-body">
                            <div className="secondCard">
                                <h3>Satisfaction Rate</h3>
                                <p>From all projects</p>
                            </div>
                            <div className="pb-3">

                            <div className="col-md-8 mx-auto  position-relative">

                                <CircularProgressbar value={value} maxValue={1}
                                // {text={`${value * 100}%`}} 
                                />
                            </div>
                            <div className="circlediv">
                                <span className="spanFirst">0%
                                </span>
                                <div className="circle">
                                    <h3 >{value}%</h3>
                                    <span>Based on likes</span>
                                </div>
                                <span className="divlast">100%
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card ">
                        <div className="card-body">
                            <div className="secondCard">
                                <div className="d-flex justify-content-between align-items-center">

                                    <h3>Referral Tracking</h3>
                                    <div className="box"><a className="MoreHorizIcon">< MoreHorizIcon /></a></div>
                                </div>
                            </div>
                            <div className="row pt-3 align-items-center">
                                <div className="col-md-4">
                                    <div className="boxes">
                                        <div className="box">
                                            <div className="card">
                                                <div className="heading">
                                                    Invited
                                                </div>
                                                <h3>
                                                    145 people
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="card">
                                                <div className="heading">
                                                    Bonus
                                                </div>
                                                <h3>
                                                    145
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="col-md-9 mx-auto">

                                        <CircularProgressbar value={value} maxValue={1}
                                            styles={{

                                                trail: {
                                                    // Trail color
                                                    stroke: '#d6d6d6',
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',
                                                    // Rotate the trail
                                                    transform: 'rotate(0.25turn)',
                                                    transformOrigin: 'center center',
                                                },
                                                // Customize the text
                                                text: {
                                                    // Text color
                                                    fill: '#f88',
                                                    // Text size
                                                    fontSize: '16px',
                                                
                                                },
                                                // Customize background - only used when the `background` prop is true
                                                background: {
                                                    fill: '#3e98c7',
                                                },
                                            }}
                                        // {text={`${value * 100}%`}} 
                                        />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSecond;