import React from 'react';
import { Link } from 'react-router-dom';


const AnimalCard = (props) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    };

    return (
        <div >
            <div className="animalCard" key={props.id}>
                <img src={props.img}></img>
                <div >Animal name: {props.name}</div>
                <div>Animal class {props.aclass}</div>
                <div>{truncate(props.desc, 30)} ...</div>
                <Link to={`/${props.link}`}>Read more</Link>
                {/* <a href={props.link}>See more</a> */}

            </div>
        </div>
    );
};

export default AnimalCard;