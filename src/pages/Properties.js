import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Home, DollarSign, Filter } from 'lucide-react';

const propertiesData = [
  {
    id: 1,
    title: "2 BHK Flat",
    city: "Pune",
    category: "Apartment",
    price: 25000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    area: "1200 sqft",
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: 2,
    title: "3 BHK Villa",
    city: "Mumbai",
    category: "Villa",
    price: 60000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
    area: "2500 sqft",
    bedrooms: 3,
    bathrooms: 3
  },
  {
    id: 3,
    title: "1 BHK Flat",
    city: "Kolhapur",
    category: "Apartment",
    price: 15000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    area: "800 sqft",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 4,
    title: "Office Space",
    city: "Mumbai",
    category: "Commercial",
    price: 45000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    area: "1500 sqft",
    bedrooms: 0,
    bathrooms: 2
  },
  {
    id: 5,
    title: "4 BHK Penthouse",
    city: "Pune",
    category: "Apartment",
    price: 80000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    area: "3000 sqft",
    bedrooms: 4,
    bathrooms: 4
  },
  {
    id: 6,
    title: "2 BHK Villa",
    city: "Kolhapur",
    category: "Villa",
    price: 35000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    area: "1800 sqft",
    bedrooms: 2,
    bathrooms: 2
  }
];

export default function PropertyListingApp() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredProperties = propertiesData.filter((item) => {
    return (
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
      (city === "" || item.city === city) &&
      (category === "" || item.category === category) &&
      (price === "" || item.price <= Number(price))
    );
  });

  const clearAll = () => {
    setSearch("");
    setCity("");
    setCategory("");
    setPrice("");
  };

  const activeFiltersCount = [city, category, price].filter(Boolean).length;

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">Find Your Dream Property</h1>
          <p className="header-subtitle">Discover the perfect place to call home</p>
        </div>
      </div>

      <div className="main-content">
        {/* Search and Filter Bar */}
        <div className="search-filter-section">
          <div className="search-filter-wrapper">
            {/* Search Bar */}
            <div className="search-bar-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="clear-search-btn"
                >
                  <X className="icon-sm" />
                </button>
              )}
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="filter-toggle-btn"
            >
              <Filter className="icon-sm" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="filter-badge">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="filters-container">
              <div className="filters-grid">
                <div className="filter-item">
                  <label className="filter-label">City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Cities</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolhapur">Kolhapur</option>
                  </select>
                </div>

                <div className="filter-item">
                  <label className="filter-label">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Categories</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div className="filter-item">
                  <label className="filter-label">Max Price</label>
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">Any Price</option>
                    <option value="20000">Up to ₹20,000</option>
                    <option value="30000">Up to ₹30,000</option>
                    <option value="50000">Up to ₹50,000</option>
                    <option value="100000">Up to ₹1,00,000</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Active Filter Chips */}
          {activeFiltersCount > 0 && (
            <div className="filter-chips-container">
              {city && (
                <span className="filter-chip">
                  <MapPin className="icon-xs" />
                  {city}
                  <button onClick={() => setCity("")} className="chip-close-btn">
                    <X className="icon-xs" />
                  </button>
                </span>
              )}
              {category && (
                <span className="filter-chip">
                  <Home className="icon-xs" />
                  {category}
                  <button onClick={() => setCategory("")} className="chip-close-btn">
                    <X className="icon-xs" />
                  </button>
                </span>
              )}
              {price && (
                <span className="filter-chip">
                  <DollarSign className="icon-xs" />
                  ≤ ₹{price.toLocaleString()}
                  <button onClick={() => setPrice("")} className="chip-close-btn">
                    <X className="icon-xs" />
                  </button>
                </span>
              )}
              <button
                onClick={clearAll}
                className="clear-all-btn"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="property-grid">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="property-card"
              >
                <div className="property-image-container">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="property-image"
                  />
                  <div className="property-category-badge">
                    <span className="category-label">
                      {property.category}
                    </span>
                  </div>
                </div>

                <div className="property-details">
                  <h3 className="property-title">{property.title}</h3>
                  
                  <div className="property-location">
                    <MapPin className="icon-sm" />
                    <span>{property.city}</span>
                  </div>

                  <div className="property-features">
                    <div className="features-list">
                      {property.bedrooms > 0 && (
                        <span>{property.bedrooms} Bed</span>
                      )}
                      <span>{property.bathrooms} Bath</span>
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="property-footer">
                    <div className="property-price-section">
                      <p className="property-price">
                        ₹{property.price.toLocaleString()}
                      </p>
                      <p className="price-label">per month</p>
                    </div>
                    <button className="view-btn">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon-container">
              <Home className="empty-icon" />
            </div>
            <h3 className="empty-title">No properties found</h3>
            <p className="empty-subtitle">Try adjusting your filters to see more results</p>
            <button
              onClick={clearAll}
              className="empty-clear-btn"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}