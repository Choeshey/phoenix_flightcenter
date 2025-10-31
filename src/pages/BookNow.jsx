import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import {Link} from "react-router-dom";
import logo2 from "../assets/logo2.png";

const BookNow = () => {
  return (
      <div className="min-h-screen px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#faeade] to-[#faeade]  text-black">
          {/* Header with Logo */}
          <header className="py-6">
              <div className="container mx-auto px-4">
                  <Link to="/" className="inline-block transition-transform hover:scale-105">
                      <img
                          src={logo2}
                          alt="Phoenix Flight Center"
                          className="h-16 w-auto md:h-20"
                      />
                  </Link>
              </div>
          </header>
    <div className="min-h-screen bg-[#faeade] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Book Your Flight
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Fill out the form below to book your scenic flight experience in Pokhara.
          </p>
        </div>

          <BookingForm />
      </div>
    </div>
      </div>
  );
};

export default BookNow;
