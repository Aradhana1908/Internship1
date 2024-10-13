// import React, { useState, useEffect, useCallback } from "react";

// const SearchFilter = ({ profiles, setFilteredProfiles }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterLocation, setFilterLocation] = useState("");

//   const filterProfiles = useCallback(() => {
//     const filtered = profiles.filter((profile) => {
//       const matchesName = profile.name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       const matchesLocation = filterLocation
//         ? profile.location.toLowerCase().includes(filterLocation.toLowerCase())
//         : true;
//       return matchesName && matchesLocation;
//     });

//     setFilteredProfiles(filtered);
//   }, [profiles, searchTerm, filterLocation, setFilteredProfiles]);

//   useEffect(() => {
//     filterProfiles();
//   }, [filterProfiles]);

//   return (
//     <div className="search-filter">
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Filter by location..."
//         value={filterLocation}
//         onChange={(e) => setFilterLocation(e.target.value)}
//       />

//       <button onClick={filterProfiles}>Search</button>
//     </div>
//   );
// };

// export default SearchFilter;
// import React, { useState, useEffect, useCallback } from 'react';

// const SearchFilter = ({ profiles, setFilteredProfiles }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterLocation, setFilterLocation] = useState("");

//   const filterProfiles = useCallback(() => {
//     const filtered = profiles.filter((profile) => {
//       const matchesName = profile.name
//         ? profile.name.toLowerCase().includes(searchTerm.toLowerCase())
//         : false;  // If profile.name is undefined, don't match

//       const matchesLocation = filterLocation
//         ? (profile.location ? profile.location.toLowerCase().includes(filterLocation.toLowerCase()) : false)
//         : true;  // If no filterLocation is set, allow all locations

//       return matchesName && matchesLocation;
//     });

//     setFilteredProfiles(filtered);
//   }, [profiles, searchTerm, filterLocation, setFilteredProfiles]);

//   useEffect(() => {
//     filterProfiles();
//   }, [filterProfiles]);

//   return (
//     <div className="search-filter">
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Filter by location..."
//         value={filterLocation}
//         onChange={(e) => setFilterLocation(e.target.value)}
//       />

//       <button onClick={filterProfiles}>Search</button>
//     </div>
//   );
// };

// export default SearchFilter;
import React, { useState, useEffect, useCallback } from 'react';

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filterProfiles = useCallback(() => {
    const filtered = profiles.filter((profile) => {
      // Check if the profile name exists and matches the search term
      const matchesName = profile.name
        ? profile.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
        : false;

      // Check if the location exists and matches the filter location
      const matchesLocation = filterLocation
        ? profile.location && profile.location.toLowerCase().includes(filterLocation.trim().toLowerCase())
        : true; // If no location filter is provided, match all profiles

      // Return profiles that match both name and location
      return matchesName && matchesLocation;
    });

    // Update the filtered profiles
    setFilteredProfiles(filtered);
  }, [profiles, searchTerm, filterLocation, setFilteredProfiles]);

  // Run the filter function when search terms or profiles change
  useEffect(() => {
    filterProfiles();
  }, [filterProfiles]);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <input
        type="text"
        placeholder="Filter by location..."
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
      />

      <button onClick={filterProfiles}>Search</button>
    </div>
  );
};

export default SearchFilter;
