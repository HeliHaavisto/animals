import React from 'react';

const NewAnimal = ({ change, submit, aclass }) => {
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="name">Name</label><br></br>
                <input type="text" name="name" onChange={change}></input><br></br>
                <label htmlFor="aclass">Class</label><br></br>
                <select name="aclass" value="aclass" onChange={change}>
                    <option value="mammals">Mammals</option>
                    <option value="birds">Birds</option>
                    <option value="reptiles">Reptiles</option>
                </select>
                <label htmlFor="img">Img url</label><br></br>
                <input type="text" name="img" onChange={change}></input><br></br>
                <label htmlFor="desc">Description</label><br></br>
                <textarea name="desc" cols="30" rows="10" onChange={change}></textarea>
                <label htmlFor="link">Read more link</label><br></br>
                <input type="text" name="link" onChange={change}></input><br></br>

                <button type="submit">Add New Animal</button>
            </form>
        </div>
    );
};

export default NewAnimal;