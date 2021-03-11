import React from 'react';
import './styles/SearchArtist.css';

const SearchArtist = ({ onChange, value }) => {
  return (
    <div className='SearchArtist'>
      <input
        className='SearchArtist__input'
        onChange={onChange}
        value={value}
        placeholder='Buscar artista'
      />
    </div>
  );
}

export default SearchArtist;