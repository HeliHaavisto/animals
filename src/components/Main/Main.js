import React, { useState, useEffect } from "react";
import NewAnimal from "../Animals/NewAnimal";
import AnimalsList from "../Animals/AnimalsList";
import axios from "axios";

const Main = () => {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
    link: "",
  });

  const valueChangeHandler = (e) => {
    setNewAnimal({
      ...newAnimal, [e.target.name]: e.target.value
    });
  }

  const submitAnimal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/animals", newAnimal);
  };

  return (
    <main>
      <AnimalsList />
      <NewAnimal change={valueChangeHandler} submit={submitAnimal} />
    </main>
  );
};

export default Main;
