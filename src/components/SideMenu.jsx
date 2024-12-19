"use client";
import { useState } from "react";
import Filters from "./Filters"; 
export default function SideMenu({
  menuOpen,
  setMenuOpen,
  toggleMenu,
  filters,
  vehicles,
  features,
  activities,
}) {
 
  const [filtersVisible, setFiltersVisible] = useState(false);

  y
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div>
      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-primary-500 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 bg-primary-600">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="text-white text-xl" onClick={toggleMenu}>
            &times;
          </button>
        </div>

      
        <div className="h-[calc(100%-100px)] overflow-y-auto"> 
          <ul className="space-y-2 p-4 text-xl">
            <li
              className="hover:bg-primary-400 p-2 rounded cursor-pointer transition-colors"
              onClick={toggleFilters} 
            >
              Tours
            </li>
            
            {filtersVisible && (
              <Filters
                filters={filters}
                vehicles={vehicles}
                features={features}
                activities={activities}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
            )}
            <li className="hover:bg-primary-400 p-2 rounded cursor-pointer transition-colors">
              Tickets
            </li>
            <li className="hover:bg-primary-400 p-2 rounded cursor-pointer transition-colors">
              Rent
            </li>
            <li className="hover:bg-primary-400 p-2 rounded cursor-pointer transition-colors">
              Transfer
            </li>
          </ul>
        </div>
      </div>

    
      {menuOpen && (
        <div
          className="fixed"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}

