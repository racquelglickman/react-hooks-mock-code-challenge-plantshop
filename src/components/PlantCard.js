import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {

  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock(!inStock);
  };

  function handleDelete() {
    onDeletePlant(plant.id);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <br />
      <button onClick={handleDelete}>🗑️</button>
    </li>
  );
}

export default PlantCard;
