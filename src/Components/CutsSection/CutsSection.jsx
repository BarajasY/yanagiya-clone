import React from 'react';
import './CutsSection.css';
import NewYork from '../../assets/NewYork.png';
import RibEye from '../../assets/RibEye.png';
import Sirloin from '../../assets/Sirloin.png'
import { Link } from 'react-router-dom';

const CutsSection = () => {

    return (
        <div className="cuts_container">
            <div className="cuts_content">
                <div className="cut">
                    <Link to="/newyork" id="NewYork">
                        <img src={NewYork} alt="" />
                    </Link>
                </div>
                <div className="cut">
                    <Link to="/ribeye" id="RibEye">
                        <img src={RibEye} alt="" />
                    </Link>
                </div>
                <div className="cut">
                    <Link to="/sirloin" id="Sirloin">
                        <img src={Sirloin} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CutsSection