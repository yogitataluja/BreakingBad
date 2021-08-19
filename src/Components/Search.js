import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e)
        getQuery(e)

    }
    return (
        <section className="search">
            <form action="">
                <input type="text" className="input"
                    placeholder="Search Characters"
                    value={text}
                    name="text"
                    onChange={(event)=>onChange(event.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
