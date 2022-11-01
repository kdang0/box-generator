import React, { useState} from 'react'
const Form = (props) => {
    const [box, setBox] = useState({
        color: "",
        size: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(box.size.length);
        props.onNewBox(box);
        setBox({
            color: "",
            size: ""
        })
    };

    const handleForm = (e) => {
        let name = e.target.name;
        setBox({...box, [name]: e.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            {JSON.stringify(box)}
            <h2>Color</h2>
            <input value={box.color} name="color" onChange={ handleForm.bind() } />
            <div className='mt-3'>
                <h2>Size</h2>
                <input value={box.size} name= "size" onChange={ handleForm.bind() } />
            </div>
            <button className='mt-3'type="submit">Add</button>
        </form>
    )
}

export default Form