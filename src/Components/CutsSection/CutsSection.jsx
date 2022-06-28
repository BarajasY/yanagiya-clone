import React, { useState, useEffect } from 'react';
import './CutsSection.css';
import NewYork from '../../assets/NewYork.png';
import RibEye from '../../assets/RibEye.png';
import Sirloin from '../../assets/Sirloin.png'
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';

const CutsSection = () => {
    const [CutActive, setCutActive] = useState(false)

    const handleEnter = () => {
        setCutActive(true)
    }

    const handleLeave = () => {
        setCutActive(false)
    }

    useEffect(() => {
        const NewYork = document.getElementById('NewYork');
        NewYork.addEventListener('mouseenter', handleEnter)
        NewYork.addEventListener('mouseleave', handleLeave)
    }, [])

    if (CutActive) {
        return (
            <>
                <div className="cuts_container">
                    <div className="cuts_content">
                        <Link to="/" className="newyork_cut" id="NewYork"></Link>
                        <Link to="/" className="ribeye_cut" id="RibEye"></Link>
                        <Link to="/" className="sirloin_cut" id="Sirloin"></Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="cuts_container">
            <div className="cuts_content">
                <Link to="/" className="newyork_cut" id="NewYork"></Link>
                <Link to="/" className="ribeye_cut" id="RibEye"></Link>
                <Link to="/" className="sirloin_cut" id="Sirloin"></Link>
            </div>
        </div>
    )
}

export default CutsSection