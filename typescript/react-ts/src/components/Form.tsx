import React, { useState } from 'react'

export const Form: React.FC = (props) => {

    const [name, setName] = useState<string | undefined>();
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" id="name" placeholder='Enter you name' />

                <button type='submit'>Submit</button>
            </form>

            <h2>{name}</h2>
        </div>
    )
}
