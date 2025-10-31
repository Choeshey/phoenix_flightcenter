import React from 'react'
import arrow_btn from "../../assets/arrow_btn.png";
import "./BookNow.css"

const BookNowButton = () => {
    return (
        <div className="btn-now">
            <p>Book Now</p>
            <img src={arrow_btn} alt="arrow_btn"/>
        </div>
    )
}
export default BookNowButton
