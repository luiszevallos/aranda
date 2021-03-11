import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListArtist from '../components/ListArtist';
import { connect } from 'react-redux';

const Home = ({ favs, dispatch }) => {
  const [addStorage, setAddStorage] = useState(false)

  useEffect(() => {
    const favsStorage = JSON.parse(localStorage.getItem("listFavs"));
    favsStorage?.length > 0 && dispatch({ type: 'ADD_FAVS', payload: favsStorage});
    setTimeout(() => setAddStorage(true), 10);
    apisMusic()
  }, [])

  useEffect(() => {
    addStorage && localStorage.setItem('listFavs', JSON.stringify(favs))
  }, [favs, addStorage])

  const apisMusic = () => {
    axios.get('https://api.musixmatch.com/ws/1.1/artist.search?apikey=e5ea9235643005beed9d3301c16a9022')
      .then(({data}) => {
        console.log(data)
        const { body } = data.message;
        dispatch({ type: 'ADD_ARTIST_LIST', payload: body.artist_list })
      })
      .catch(console.error);
  }

  return (
    <main>
      <ListArtist />
    </main>
  );
}


const mapStateToProps = ({ store: { favs, artist_list } }) => {
  return { favs, artist_list }
}

export default connect(mapStateToProps)(Home);