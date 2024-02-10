import React from "react";
import './billing.css';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const BillingComponents = () => {
  return (
    <>
      <div className="BillingComponents">

        <div className="row pt-3">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div class="card">
                  <div className="card-body p-0">
                    <div className="bg-imag ">
                      <div className="d-flex">
                        <h2 >Vision UI</h2>
                        <JoinFullIcon className="icon" />
                      </div>
                      <span className="subHeading">7812   2139   0823   7916</span>

                      <div className="boxes mt-2">
                        <div className="box">
                          <div className="firstbox">
                            <span>VALID THRU</span>
                            <h6>05/24</h6>
                          </div>
                          <div className="secondbox">
                            <span>CVV</span>
                            <h6>09X</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card">
                  <div className="card-body bg-blue">
                    <div className="cardsmall">
                      <div className="card-body-small">
                        <div className="d-flex">
                          <span>
                            Credit Balance
                          </span>
                          <MoreHorizIcon className="icon" />
                        </div>
                        <div className="nextDiv">
                          <h2>$25,215</h2>
                        </div>
                      </div>


                    </div>
                    <span className="heading">NEWEST</span>
                    <div className="divmain">
                      <div className="first">
                        <div className="box">
                          <ArticleIcon className="icon" />
                        </div>
                        <div className="headingBoxblue">
                          <h5>Bill & Taxes</h5>
                          <h6>Today, 16:36</h6>
                        </div>
                      </div>
                      <span className="second">
                        -$154.50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div class="card">
                  <div className="card-body p-4">
                    <div className="mainrow">
                      <h6>Payment Method</h6>
                      <button className="paymemt">ADD NEW CARD</button>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="inputcard">
                          <JoinFullIcon className="icon" />
                          <span>7812 2139 0823 XXXX</span>
                          <CreateIcon className="pencile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inputcard">
                          <JoinFullIcon className="icon" />
                          <span>7812 2139 0823 XXXX</span>
                          <CreateIcon className="pencile" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card p-2">
              <div class="card-body">
                <div className="secondCard">
                  <div className="d-flex">
                  <h3 className="">Invoices</h3>
                  <a href="#" className="paymemmt">VIEW ALL</a>
                  </div>
                </div><br></br>
                <div className="headingBox ">
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

        </div>
        <div className="row pt-4">
          <div className="col-md-7 ">
            <div class="card p-3">
              <div className="card-body">
                <div className="heading">Billing Information</div>

                <div className="cardMain">
                  <div className="card-body-main">
                    <div className="maindiv">
                      <div className="mainrow">
                        <span>Oliver Liam</span>
                        
                      </div>
                      <div className="mainSeconMain">
                        <span>Company Name:   Viking Burrito</span>
                      </div>
                      <div className="mainSeconMain">
                        <span>Email Address:   lucas@stone-tech.com</span>
                      </div> <div className="mainSeconMain">
                        <span>VAT Number:   FRB1235476</span>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="cardMain">
                  <div className="card-body-main">
                    <div className="maindiv">
                      <div className="mainrow">
                        <span>Oliver Liam</span>
                      </div>
                      <div className="mainSeconMain">
                        <span>Company Name:   Viking Burrito</span>
                      </div>
                      <div className="mainSeconMain">
                        <span>Email Address:   lucas@stone-tech.com</span>
                      </div> <div className="mainSeconMain">
                        <span>VAT Number:   FRB1235476</span>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="cardMain">
                  <div className="card-body-main">
                    <div className="maindiv">
                      <div className="mainrow">
                        <span>Oliver Liam</span>
                      </div>
                      <div className="mainSeconMain">
                        <span>Company Name:   Viking Burrito</span>
                      </div>
                      <div className="mainSeconMain">
                        <span>Email Address:   lucas@stone-tech.com</span>
                      </div> <div className="mainSeconMain">
                        <span>VAT Number:   FRB1235476</span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div class="card">
              <div className="card-body">
                <div className="heading">Your Transaction's</div>
                <span className="subheading">NEWEST</span>
                <div className="divmain mt-4">
                  <div className="first">
                    <div className="boxbox wrong">
                      <ArrowDownwardIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5>Netflix</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second wrong">
                    -$154.50
                  </span>
                </div>

                <div className="divmain mt-4">
                  <div className="first">
                    <div className="boxbox right">
                      <ArrowUpwardIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5> Apple</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second right">
                    +$154.50
                  </span>
                </div>
                <div className="subheading mt-4">
                  YESTERDAY
                </div>
                <div className="divmain mt-4">
                  <div className="first">
                    <div className="boxbox right">
                      <ArrowUpwardIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5>Stripe</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second right">
                    +$154.50
                  </span>
                </div>
                <div className="divmain mt-4">
                  <div className="first">
                    <div className="boxbox right">
                      <ArrowUpwardIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5>HubSpot</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second right">
                    +$154.50
                  </span>
                </div>
                <div className="divmain mt-4">
                  <div className="first">
                    <div className="boxbox right">
                      <ArrowUpwardIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5>HubSpot</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second right">
                    +$154.50
                  </span>
                </div>
                <div className="divmain mt-4">
                  <div className="first">
                    <div className="boxbox right">
                      <ArrowUpwardIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5>HubSpot</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second right">
                    +$154.50
                  </span>
                </div>
                <div className="divmain mt-3">
                  <div className="first">
                  <div className="boxbox alertw">
                      <PriorityHighIcon className="icon" />
                    </div>
                    <div className="headingBoxblue">
                      <h5>Webflow</h5>
                      <h6>27 March 2020, at 12:30 PM</h6>
                    </div>
                  </div>
                  <span className="second alertw">
                    Pending
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div><br></br>


    </>
  );
}
export default BillingComponents;