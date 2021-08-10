import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')


  const queryHandler = (event) => {
    const query = event.target.value;
    setText(query);
    getQuery(query);
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={queryHandler}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
