import React, { useState, useEffect } from "react";
import NewAnimal from "../Animals/NewAnimal";
import AnimalsList from "../Animals/AnimalsList";
import AnimalSingle from "../Animals/AnimalSingle";
import axios from "axios";
import { Switch, Router, Route } from 'react-router-dom';

const Main = () => {
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "mammals",
    img: "",
    desc: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((res) => setAnimals(res.data));
  }, []);

  const valueChangeHandler = (e) => {
    setNewAnimal({
      ...newAnimal, [e.target.name]: e.target.value
    });
  }

  const submitAnimal = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/animals", newAnimal)
      .then(() => {
        return axios.get("http://localhost:3001/animals");
      })
      .then((res) => setAnimals(res.data));
    e.target.reset();
  };

  return (
    <main>
      <Switch>
        <Route path="/:id">
          <AnimalSingle />
        </Route>
        <Route path="/" exact>
          <AnimalsList animals={animals} />
          <NewAnimal change={valueChangeHandler} submit={submitAnimal} />
        </Route>

      </Switch>
    </main>
  );
};

export default Main;
