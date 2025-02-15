import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search, onDeletePlant, onEditPrice, onEditName }) {

  const plantsToDisplay = plants.filter((plant) => {
    if (search === '') return true;
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const plantCards = plantsToDisplay.map((plant) => {
    return <PlantCard key={plant.name} plant={plant} onDeletePlant={onDeletePlant} onEditPrice={onEditPrice} onEditName={onEditName}/>
  });

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
