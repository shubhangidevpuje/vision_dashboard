import React from "react";
import FolderIcon from '@mui/icons-material/Folder';
import LanguageIcon from '@mui/icons-material/Language';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HomeFirst = () => {
    return (
        <>
            <div className="row pt-4">
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
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="float-end">
                                    <div className="info">
                                        <h4>Today's Users</h4>

                                        <h5 className="infosecond">$2,300
                                            <span className="green">
                                                +3%
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="leftSide">
                                    <div className="box">
                                        <LanguageIcon />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="float-end">
                                    <div className="info">
                                        <h4>New Clients</h4>

                                        <h5 className="infosecond">+3,462 
                                            <span className="red">
                                               -2%
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="leftSide">
                                    <div className="box">
                                        <InsertDriveFileIcon />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="float-end">
                                    <div className="info">
                                        <h4>Total Sales</h4>

                                        <h5 className="infosecond">$103,430 
                                            <span className="green">
                                                +5%
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="leftSide">
                                    <div className="box">
                                        <ShoppingCartIcon />

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

export default HomeFirst;