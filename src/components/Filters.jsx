import React from "react";

const Filters = ({ filters, vehicles, features, activities, onFilter, onReset }) => {
  return (
    <div className="space-y-4 p-4">
      
      <div>
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          className="mt-2 p-2 w-full border rounded-md text-gray-700"
          placeholder="Enter location"
        />
      </div>

      {/* Price Filters */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Min Price</label>
          <input
            type="range"
            className="mt-2 w-full"
            min="0"
            max="10000"
            step="100"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Max Price</label>
          <input
            type="range"
            className="mt-2 w-full"
            min="0"
            max="10000"
            step="100"
          />
        </div>
      </div>

      {/* Duration Filters */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Min Duration (days)</label>
          <input
            type="number"
            className="mt-2 p-2 w-full border rounded-md text-gray-700"
            placeholder="Min Duration"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Max Duration (days)</label>
          <input
            type="number"
            className="mt-2 p-2 w-full border rounded-md text-gray-700"
            placeholder="Max Duration"
          />
        </div>
      </div>

      {/* Date Filter */}
      <div>
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          className="mt-2 p-2 w-full border rounded-md text-gray-700"
        />
      </div>

      {/* Rate Filters */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Min Rate</label>
          <input
            type="range"
            className="mt-2 w-full"
            min="0"
            max="5"
            step="1"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Max Rate</label>
          <input
            type="range"
            className="mt-2 w-full"
            min="0"
            max="5"
            step="1"
          />
        </div>
      </div>

      {/* Vehicle Filter */}
      <div>
        <label className="block text-gray-700">Vehicle Type</label>
        <div className="space-y-2">
          {vehicles.map((vehicle) => (
            <div key={vehicle.key}>
              <input
                type="checkbox"
                id={vehicle.key}
                name={vehicle.key}
                className="mr-2"
              />
              <label htmlFor={vehicle.key}>{vehicle.name}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Features Filter */}
      <div>
        <label className="block text-gray-700">Features</label>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature.key}>
              <input
                type="checkbox"
                id={feature.key}
                name={feature.key}
                className="mr-2"
              />
              <label htmlFor={feature.key}>{feature.name}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Filter */}
      <div>
        <label className="block text-gray-700">Activity Type</label>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.key}>
              <input
                type="checkbox"
                id={activity.key}
                name={activity.key}
                className="mr-2"
              />
              <label htmlFor={activity.key}>{activity.name}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Filter and Reset Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={onFilter}
          className="w-1/2 bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition"
        >
          Filter
        </button>
        <button
          onClick={onReset}
          className="w-1/2 bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
