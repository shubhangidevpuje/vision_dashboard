import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Paper, TableContainer } from "@mui/material";

const HomeForth = () => {
    return (
        <>
            <div className="row pt-4">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">

                                <div className="secondCard">
                                    <h3>Projects</h3>
                                    <p>
                                        <span className="fw-bold">30 done</span>
                                        <span> this month</span>
                                    </p>
                                </div>

                                <MoreVertIcon />
                            </div>
                            <TableContainer >

                            <table className="tablestyle">
                                <thead className="theadStyle">
                                    <tr>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Position</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="tbodyStyle">
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style={{ width: '45px', height: '45px' }} className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">John Doe</p>
                                                    <p className=" mb-0">john.doe@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Software engineer</p>
                                            <p className=" mb-0">IT department</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>
                                        <td className="senior">Senior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt="" style={{ width: '45px', height: '45px' }} />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Alex Ray</p>
                                                    <p className=" mb-0">alex.ray@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Consultant</p>
                                            <p className=" mb-0">Finance</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                                        </td>
                                        <td className="senior">Junior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-circle" alt="" style={{ width: '45px', height: '45px' }} />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Kate Hunington</p>
                                                    <p className=" mb-0">kate.hunington@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Designer</p>
                                            <p className=" mb-0">UI/UX</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                                        </td>
                                        <td className="senior">Senior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style={{ width: '45px', height: '45px' }} className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">John Doe</p>
                                                    <p className=" mb-0">john.doe@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Software engineer</p>
                                            <p className="   mb-0">IT department</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>
                                        <td className="senior">Senior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt="" style={{ width: '45px', height: '45px' }} />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Alex Ray</p>
                                                    <p className=" mb-0">alex.ray@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Consultant</p>
                                            <p className=" mb-0">Finance</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                                        </td>
                                        <td className="senior">Junior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-circle" alt="" style={{ width: '45px', height: '45px' }} />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">Kate Hunington</p>
                                                    <p className=" mb-0">kate.hunington@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Designer</p>
                                            <p className=" mb-0">UI/UX</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                                        </td>
                                        <td className="senior">Senior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            </TableContainer>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="secondCard">
                                <h3>Orders overview</h3>
                                <p>
                                    <span className="fw-bold">+30%</span>
                                    <span> this month</span>
                                </p>
                            </div>
                            <div className="headingBox">
                                <div className="secondCard">
                                    <h3>Orders overview</h3>
                                    <p>
                                        <span className="fw-bold">$2400, Design changes</span>
                                        <span> 22 DEC 7:20 PM</span>
                                    </p>
                                </div>
                            </div>
                            <div className="headingBox">
                                <div className="secondCard">
                                    <h3>Orders overview</h3>
                                    <p>
                                        <span className="fw-bold">$2400, Design changes</span>
                                        <span> 22 DEC 7:20 PM</span>
                                    </p>
                                </div>
                            </div>
                            <div className="headingBox">
                                <div className="secondCard">
                                    <h3>Orders overview</h3>
                                    <p>
                                        <span className="fw-bold">$2400, Design changes</span>
                                        <span> 22 DEC 7:20 PM</span>
                                    </p>
                                </div>
                            </div>
                            <div className="headingBox">
                                <div className="secondCard">
                                    <h3>Orders overview</h3>
                                    <p>
                                        <span className="fw-bold">$2400, Design changes</span>
                                        <span> 22 DEC 7:20 PM</span>
                                    </p>
                                </div>
                            </div>
                            <div className="headingBox">
                                <div className="secondCard">
                                    <h3>Orders overview</h3>
                                    <p>
                                        <span className="fw-bold">$2400, Design changes</span>
                                        <span> 22 DEC 7:20 PM</span>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div><br></br>
        </>
    )
}

export default HomeForth;