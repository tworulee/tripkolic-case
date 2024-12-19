"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./SideMenu";

const filters = [
  { name: "Location", type: "text" },
  { name: "Min-Price", type: "range" },
  { name: "Max-Price", type: "range" },
  { name: "Min-Duration", type: "number" },
  { name: "Max-Duration", type: "number" },
  { name: "Date", type: "date" },
  { name: "Min-Rate", type: "stars" },
  { name: "Max-Rate", type: "stars" },
];

const vehicles = [
  { name: "Car", key: "car" },
  { name: "Bike", key: "bike" },
  { name: "Bus", key: "bus" },
  { name: "Motorcycle", key: "motorcycle" },
  { name: "Scooter", key: "scooter" },
  { name: "Truck", key: "truck" },
  { name: "Van", key: "van" },
  { name: "Yacht", key: "yacht" },
];

const features = [
  { name: "Air Conditioning", key: "air-conditioning" },
  { name: "Automatic Transmission", key: "automatic-transmission" },
  { name: "Bluetooth", key: "bluetooth" },
  { name: "Child Seat", key: "child-seat" },
  { name: "GPS", key: "gps" },
  { name: "Heated Seats", key: "heated-seats" },
];

const activities = [
  { name: "Adventure", key: "adventure" },
  { name: "Beach", key: "beach" },
  { name: "Camping", key: "camping" },
  { name: "Cycling", key: "cycling" },
  { name: "Hiking", key: "hiking" },
  { name: "Sightseeing", key: "sightseeing" },
  { name: "Swimming", key: "swimming" },
  { name: "Walking", key: "walking" },
  { name: "Water Sports", key: "water-sports" },
  { name: "Wildlife", key: "wildlife" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
        <GiHamburgerMenu
          className="text-3xl text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={toggleMenu}
        />
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={48}
            className="object-contain"
            priority
          />
        </Link>
        <Link href={"/signin"}>
          <CgProfile className="text-4xl text-gray-600 hover:text-gray-800 cursor-pointer" />
        </Link>
      </div>

      {/* Side Menu Component */}
      <SideMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
        filters={filters}
        vehicles={vehicles}
        features={features}
        activities={activities}
      />
    </div>
  );
}
