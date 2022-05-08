import React from "react";
import './comStyles.css'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <div className="container">
            <div className="wrap">
                <div className="home-slider">
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                    <div className="slider-items"></div>
                </div>
            </div>
            <div className="test-box">
                <Link to='/add_words' className="add-words-box">
                    <p className="">Add new words</p>
                    <AddIcon />
                </Link>
                <Link to='/test' className="add-words-box">
                    <p className="">Start test</p>
                </Link>
            </div>
        </div>
    )
}
export default Home;