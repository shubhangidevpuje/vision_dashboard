import { Link } from "react-router-dom";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import './Header.css';

const UserHeader = ({ pageName, onPageChange }) => {
    const handlePageClick = (name) => {
        onPageChange(name);
    };

    return (
        <>
            <div className="col-md-10 mx-auto">
                <div className="mainUserHeader">
                    <Link to="/" onClick={() => handlePageClick('Dashboard')} className="linking">
                        <span>VISION UI FREE</span>
                    </Link>
                    <div className="middleSection">
                        <Link to="/" onClick={() => handlePageClick('Dashboard')} className="linking">

                            <div className="headingSection">

                                <DonutLargeIcon className="icon" />
                                <h6>Dashboard</h6>
                            </div>
                        </Link>
                        <Link to="/profile" onClick={() => handlePageClick('Profile')} className="linking">

                            <div className="headingSection">

                                <DonutLargeIcon className="icon" />
                                <h6>Profile</h6>
                            </div>
                        </Link>
                            <div className="headingSection">

                                <DonutLargeIcon className="icon" />
                                <h6>{pageName === 'Sing In' ? 'Sing Up' : pageName}</h6>
                            </div>

                            <div className="headingSection">

                                <DonutLargeIcon className="icon" />
                                <h6>{pageName === 'Sing In' ? pageName : 'Sing Up'}</h6>
                            </div>
                    </div>
                    <div className="lastSection">
                        <button >Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHeader;