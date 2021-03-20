import React, { useState } from 'react';
import { connect } from 'react-redux';
import useSearchArtist from '../hooks/useSearchArtist';
import ItemArtist from './ItemArtist';
import SearchArtist from './SearchArtist';
import './styles/ListArtist.css';

const ListArtist = ({ artist_list, favs }) => {
  const [listFavs, setListFavs] = useState(false);
  const [value, setValue] = useState('');
  const list = listFavs ? favs : artist_list;
  const currentList = useSearchArtist(list, value);
  const handleChange = ({ target }) => setValue(target.value)
  return (
    <>
      <SearchArtist
        onChange={handleChange}
        value={value}
      />
      <div className='ListArtist'>
        <div className='ListArtist__hero'>
          <div
            className='ListArtist__hero-favs'
            onClick={() => setListFavs(!listFavs)}
          >
            {listFavs ? 'Ver lista' : 'Ver favoritos'}
          </div>
          <h3 className='ListArtist__hero-title'>
            {value ? 'Resultados..' : listFavs ? 'Favoritos' : `Top ${currentList?.length || 0} By Musicxmatch`}
          </h3>
        </div>
        <div className='ListArtist__list'>
          {currentList?.length > 0 &&
            currentList.map((item) => <ItemArtist key={item.artist.artist_id} item={item} />)}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ store: { artist_list, favs } }) => {
  return { artist_list, favs }
}

export default connect(mapStateToProps)(ListArtist);