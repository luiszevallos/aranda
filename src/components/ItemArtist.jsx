import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import './styles/ItemArtist.css';
import { Star, StarBorder } from '@material-ui/icons';
import { connect } from 'react-redux';

const ItemArtist = ({ item, favs, dispatch }) => {
  const [fav, setFav] = useState(false);
  const { artist } = item;
  const { artist_id } = artist;
  useEffect(() => {
    const res = favs.find(({artist}) => artist.artist_id === artist_id)
    setFav(res)
  }, [favs, artist_id])
  return (
    <div className='ItemArtist'>
      <span className='ItemArtist__name'>{artist.artist_name}</span>
      <span className='ItemArtist__country'>{artist.artist_country}</span>
      <div>
        <Button
          onClick={() => dispatch({type: 'ADD_FAV', payload: item})}>
          {fav
            ? <Star style={{color: '#3cd372'}} />
            : <StarBorder style={{color: '#6b6b6b'}}/>
          }
        </Button>
        <Button>+</Button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ store: { favs } }) => {
  return { favs }
}

export default connect(mapStateToProps)(ItemArtist);