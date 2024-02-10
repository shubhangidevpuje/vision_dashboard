import React from "react";
import FolderIcon from '@mui/icons-material/Folder';
import { ColumnChart } from "../../SubComponents/GraphComponents/ColumnChart";
import AreaGraph from "../../SubComponents/GraphComponents/AreaGraph";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HomeThird = () => {
    return (
        <>
            <div className="row pt-4">
                <div className="col-md-7">
                    <div class="card">
                        <div class="card-body">
                            <div className="secondCard">
                                <h3>Sales Overview </h3>
                                <p>
                                    <span className="green">
                                        +5% more
                                    </span>
                                    <span> in 2021</span>
                                </p>
                            </div>
                            <div className="graph">
                                <AreaGraph />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="graphCard">

                                <ColumnChart />
                            </div>
                            <div className="secondCard mt-4">
                                <h3>Active Users </h3>
                                <p>
                                    <span className="green">
                                        (+23)
                                    </span>
                                    <span> than last week</span>
                                </p>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-3">
                                    <div className="heading">
                                        <div className="box">
                                            <FolderIcon className="icon" />
                                        </div>
                                        <h4>Users</h4>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="heading">
                                        <div className="box">
                                            <RocketLaunchIcon className="icon" />
                                        </div>
                                        <h4>Clicks</h4>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="heading">
                                        <div className="box">
                                            <ShoppingCartIcon className="icon" />
                                        </div>
                                        <h4>Sales</h4>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="heading">
                                        <div className="box">
                                            <FolderIcon className="icon" />
                                        </div>
                                        <h4>Items</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-3">
                                    <div className="heading">

                                        <span>$34,00</span>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="heading">
                                    <span>$34,00</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="heading">
                                    <span>$34,00</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="heading">
                                    <span>$34,00</span>
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

export default HomeThird