"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TourCard from "./TourCard";

const MainPage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://beta.tripkolic.com/api/v1/product/task/tours")
      .then((response) => {
        console.log(response.data);

        if (Array.isArray(response.data.products)) {
          setTours(response.data.products);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            title={tour.title}
            description={tour.description}
            location={tour.activityLocation}
            price={tour.price}
            vehicle={tour.vehicle}
            rating={4.2}
            image={tour.galleries?.[0]?.url || "/logo.jpg"}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
