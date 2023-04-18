import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantArray, setPlantArray] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => res.json())
      .then((data) => {
        setPlantArray(data);
      })
  }, [])

  function onAddPlant(newPlantSubmission) {
    setPlantArray([
      ...plantArray, newPlantSubmission
    ]);
  };

  function onDeletePlant(deletedId) {

    fetch(`http://localhost:6001/plants/${deletedId}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then(() => {
        console.log('successfully deleted');
      })

    setPlantArray(plantArray.filter((plant) => {
        return plant.id !== deletedId;
      }));
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plantArray} search={search} onDeletePlant={onDeletePlant}/>
    </main>
  );
}

export default PlantPage;
