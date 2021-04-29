import React, { useState, useEffect } from 'react';
import axios from "axios";
import AnimalCard from './AnimalCard';

const AnimalsList = ({ animals }) => {

    return (
        <div className="container">
            {animals.map((a) => (
                <AnimalCard
                    key={a.id}
                    name={a.name}
                    img={a.img}
                    desc={a.desc}
                    aclass={a.aclass}
                    link={a.id}
                />
            ))}
        </div>
    );
};

export default AnimalsList;