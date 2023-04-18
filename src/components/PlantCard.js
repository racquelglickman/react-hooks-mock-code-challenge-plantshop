import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onEditPrice, onEditName }) {

  const [inStock, setInStock] = useState(true);
  const [editPrice, setEditPrice] = useState(false);
  const [editPriceValue, setEditPriceValue] = useState(plant.price);
  const [editName, setEditName] = useState(false);
  const [editNameValue, setEditNameValue] = useState(plant.name);

  function handleClick() {
    setInStock(!inStock);
  };

  function handleDelete() {
    onDeletePlant(plant.id);
  };

  function handleEditPrice(e) {
    e.preventDefault();
    onEditPrice(editPriceValue, plant.id);
    setEditPrice(!editPrice);
  };

  function handleEditName(e) {
    e.preventDefault();
    onEditName(editNameValue, plant.id);
    setEditName(!editName);
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      
      {editName ? 
        <form onSubmit={handleEditName}>
          <input style={{fontSize: '1em', padding: '0rem'}} type='text' placeholder='Edit Name' value={editNameValue} onChange={(e) => {setEditNameValue(e.target.value)}}></input>
        </form> : 
        <h4 onClick={() => {setEditName(!editName)}}>{plant.name}</h4>}
      {editPrice ? 
        <form onSubmit={handleEditPrice}>
          <span onClick={() => {setEditPrice(!editPrice)}} >Price: </span>
          <input style={{width: '100px', fontSize: '1em', padding: '0rem'}} type='number' step="0.01" placeholder='Edit Price' value={editPriceValue} onChange={(e) => {setEditPriceValue(e.target.value)}}></input>
        </form> : 
        <p onClick={() => {setEditPrice(!editPrice)}}>Price: {plant.price}</p>
      }
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
