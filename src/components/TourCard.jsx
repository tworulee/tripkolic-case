"use client";
import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaClock, FaHeart } from "react-icons/fa";

const TourCard = ({
  title,
  description,
  location,
  price,
  vehicle,
  rating,
  image,
}) => {
  return (
    <div className=" bg-white rounded-lg ">
      <div className="  bg-gray-200 rounded-lg p-2 transition-colors duration-300 shadow-2xl shadow-white"></div>
      <div className=" w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-primary-500" />
          <span>{location?.address}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-gray-600 font-bold">{rating}</span>
          </div>
          <div className="text-lg font-bold text-primary-500">
            ${price?.adultPrice}
          </div>
        </div>
        <div className="text-sm text-gray-600">Vehicle: {vehicle?.name}</div>
      </div>
    </div>
  );
};

export default TourCard;
