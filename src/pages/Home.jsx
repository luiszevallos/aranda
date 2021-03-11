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

  const apisMusic = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'https://api.musixmatch.com/ws/1.1/artist.search?apikey=d8c08ac0ab57c7902a409c9816e1d1da',
        config: {
          headers: {
            "Accept": "application/json",
            "content-length": "103",
            "content-type": "text/plain; charset=utf-8"
          }
        }
      })
      console.log(res)
      //setListView()
    } catch (error) {
      console.log(error)
    }
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