function Filters({ city, setCity, category, setCategory, price, setPrice }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">All Cities</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolhapur">Kolhapur</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Commercial">Commercial</option>
      </select>

      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Any Price</option>
        <option value="20000">Up to ₹20,000</option>
        <option value="30000">Up to ₹30,000</option>
        <option value="50000">Up to ₹50,000</option>
      </select>
    </div>
  );
}

export default Filters;
