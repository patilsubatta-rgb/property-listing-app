function FilterChips({ city, category, price, clearCity, clearCategory, clearPrice, clearAll }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      {city && <span onClick={clearCity}>City: {city} ❌</span>}
      {category && <span onClick={clearCategory}>Category: {category} ❌</span>}
      {price && <span onClick={clearPrice}>Price ≤ ₹{price} ❌</span>}

      {(city || category || price) && (
        <button onClick={clearAll}>Clear All</button>
      )}
    </div>
  );
}

export default FilterChips;
