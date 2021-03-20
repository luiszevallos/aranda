import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import BtnFav from '../components/BtnFav';
import './styles/ModalDetails.css';

const ModalDetails = ({ item, favs, onClickFav, onClickClose }) => {
  const [fav, setFav] = useState(true);
  const { artist } = item;
  const { artist_id } = artist;
  useEffect(() => {
    const res = favs.find(({artist}) => artist.artist_id === artist_id)
    setFav(res)
  }, [artist, artist_id, favs])
  return ReactDom.createPortal(
    <div className='ModalDetails'>
      <div className='ModalDetails__transparent' onClick={onClickClose}/>
      <div className='ModalDetails__contain'>
        <div className='ModalDetails__contain-hero'>
          <h3 className='ModalDetails__contain-hero-title'>{artist.artist_name}</h3>
          <BtnFav
            fav={fav}
            onClick={onClickFav}
            message={fav && artist.artist_name.length < 30
              ? 'Agregado como favorito' : ''}
          />
        </div>
        <div className='ModalDetails__contain-list'>
          lista album
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

const mapStateToProps = ({ store: { favs } }) => {
  return { favs }
}

export default connect(mapStateToProps)(ModalDetails);
