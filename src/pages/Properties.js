import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import propertiesData from "../data/properties";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import FilterChips from "../components/FilterChips";
import PropertyList from "../components/PropertyList";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [price, setPrice] = useState(searchParams.get("price") || "");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // URL query params sync
  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (city) params.city = city;
    if (category) params.category = category;
    if (price) params.price = price;
    setSearchParams(params);
  }, [search, city, category, price, setSearchParams]);

  // LocalStorage save
  useEffect(() => {
    localStorage.setItem(
      "propertyFilters",
      JSON.stringify({ search, city, category, price })
    );
  }, [search, city, category, price]);

  // LocalStorage restore
  useEffect(() => {
    const saved = localStorage.getItem("propertyFilters");
    if (saved) {
      const data = JSON.parse(saved);
      setSearch(data.search || "");
      setCity(data.city || "");
      setCategory(data.category || "");
      setPrice(data.price || "");
    }
  }, []);

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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Properties</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters
        city={city}
        setCity={setCity}
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
      />

      <FilterChips
        city={city}
        category={category}
        price={price}
        clearCity={() => setCity("")}
        clearCategory={() => setCategory("")}
        clearPrice={() => setPrice("")}
        clearAll={clearAll}
      />

      <PropertyList properties={filteredProperties} />
    </div>
  );
}

export default Properties;
