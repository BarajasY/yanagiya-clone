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
                        <p>New York Hokkaido Wagyu A5-11</p>
                    </Link>
                </div>
                <div className="cut">
                    <Link to="/ribeye" id="RibEye">
                        <img src={RibEye} alt="" />
                        <p>RibEye Hokkaido Wagyu A5-11</p>
                    </Link>
                </div>
                <div className="cut">
                    <Link to="/sirloin" id="Sirloin">
                        <img src={Sirloin} alt="" />
                        <p>Top Sirloin Hokkaido Wagyu A5-10</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CutsSection