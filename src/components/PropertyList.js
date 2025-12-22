function PropertyList({ properties }) {
  return (
    <ul>
      {properties.map((item) => (
        <li key={item.id}>
          <strong>{item.title}</strong> <br />
          City: {item.city} <br />
          Category: {item.category} <br />
          Price: ₹{item.price}
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default PropertyList;
