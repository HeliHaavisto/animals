import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";



const AnimalSingle = () => {
    const [animal, setAnimal] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!animal) {
            axios.get("http://localhost:3001/animals/" + id)
                .then((res) => setAnimal(res.data));
        }

    })

    let animalData = undefined;

    if (!animal) {
        animalData = <h1>Loading...</h1>
    }

    if (animal) {
        animalData =
            <>
                <div>
                    <h1>{animal.name}</h1>
                    <p>{animal.desc}</p>
                    <img src={animal.img}></img>
                    <a href={animal.link} target="_blank">Read more in wiki</a>
                </div>
                <button onClick={() => history.goBack()}>Back to animals</button>
            </>
    }

    return (
        <div>{animalData}

        </div>
    );
};

export default AnimalSingle;