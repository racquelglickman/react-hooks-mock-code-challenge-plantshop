import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onEditPrice }) {

  const [inStock, setInStock] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(plant.price);

  function handleClick() {
    setInStock(!inStock);
  };

  function handleDelete() {
    onDeletePlant(plant.id);
  };

  function handleEdit(e) {
    e.preventDefault();
    onEditPrice(editValue, plant.id);
    setEdit(!edit);
  };


  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      {edit ? 
        <form onSubmit={handleEdit}>
          <p onClick={() => {setEdit(!edit)}}>Price: </p>
          <input type='number' step="0.01" placeholder='Edit Price' value={editValue} onChange={(e) => {setEditValue(e.target.value)}}></input>
        </form> : 
        <p onClick={() => {setEdit(!edit)}}>Price: {plant.price}</p>}
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <br />
      <button onClick={handleDelete}>🗑️</button>
    </li>
  );
};

export default PlantCard;
