import { MDBCol, MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import './Signup.css'


const SignupSection = () => {
    return (
        <>
            <div className="firstDive">
                <div className="SignupSection">
                    <div className="bg_image">
                        <h6>
                            INSPIRED BY THE FUTURE:
                        </h6>
                        <h2>
                            THE VISION UI DASHBOARD
                        </h2>
                    </div>
                </div>

            </div>
            <div className="secondDive">
                <div className="SignupSection">
                    <MDBCol md='5' className="m-auto mdbcol" role="form">
                        <h3 className="h3 text-white">Login to your account</h3><br></br>

                        <MDBInput wrapperClass='mb-4' label='Username or email' id='formControlLg' type='email' size="lg" />
                        
                        <MDBInput  wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                        <div className="d-flex justify-content-between mx-4 mb-4 lightgray">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        </div>
                        <MDBBtn className="my-0 w-100 mb-2 login" size="lg">Login</MDBBtn>
                        <div className="mt-2">
                            <p className="lightgray">Don't have an account? <a href="#!" className="black">Sign Up</a></p>
                        </div>
                    </MDBCol>
                </div>

            </div>
        </>
    )
}

export default SignupSection;