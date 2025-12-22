function SearchBar({ search, setSearch }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Search property..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default SearchBar;
