import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import './styles/ItemArtist.css';
import { connect } from 'react-redux';
import BtnFav from './BtnFav';
import ModalDetails from '../modals/ModalDetails';
import Message from '../modals/Message';

const ItemArtist = ({ item, favs, dispatch }) => {
  const [fav, setFav] = useState(false);
  const [details, setDetails] = useState(false);
  const [message, setMessage] = useState(false);
  const { artist } = item;
  const { artist_id } = artist;

  useEffect(() => {
    const res = favs.find(({artist}) => artist.artist_id === artist_id)
    setFav(res)
  }, [favs, artist_id])

  const messageView = {
    title: artist.artist_name,
    description: `${fav ? 'Agregado como' : 'Eliminado de'} favorito`,
  }

  const handleClickFav = () => {
    dispatch({type: 'ADD_FAV', payload: item})
    setMessage(!message)
  }

  const styleBtnMax = {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6b6b6b',
    minWidth: 'initial',
    padding: '1px 10px'
  }

  return (
    <>
      <div className='ItemArtist'>
        <span className='ItemArtist__name'>{artist.artist_name}</span>
        <span className='ItemArtist__country'>{artist.artist_country}</span>
        <div className='ItemArtist__btn'>
          <BtnFav fav={fav} onClick={handleClickFav} />
          <Button
            title='Ver Album'
            style={styleBtnMax}
            onClick={() => setDetails(!details)}
          >
            +
          </Button>
        </div>
      </div>
      {details &&
        <ModalDetails
          item={item}
          onClickClose={() => setDetails(!details)}
          onClickFav={handleClickFav}
        />
      }
      {message &&
        <Message
          message={messageView}
          onClickClose={() => setMessage(!message)}
        />
      }
    </>
  );
}

const mapStateToProps = ({ store: { favs } }) => {
  return { favs }
}

export default connect(mapStateToProps)(ItemArtist);