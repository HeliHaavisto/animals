import React, { useState, useEffect } from 'react';
import axios from "axios";
import AnimalCard from './AnimalCard';

const AnimalsList = () => {

    const [animals, setAnimals] = useState([]);

    const [newAnimal, setNewAnimal] = useState({
        name: "",
        aclass: "",
        img: "",
    })

    useEffect(() => {
        axios.get("http://localhost:3001/animals")
            .then(res => setAnimals(res.data));
    }, []);

    const listedAnimals = animals.map((animal) => (
        <AnimalCard name={animal.name} img={animal.img} key={animal.id} aclass={animal.aclass} desc={animal.desc} link={animal.link} />));

    return (
        <div className="container">
            {listedAnimals}

        </div>
    );
};

export default AnimalsList;