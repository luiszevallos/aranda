import React from 'react';
import { Button } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import './styles/BtnFav.css';

const BtnFav = ({ fav, onClick, message }) => {
  return (
    <Button
      title={`${fav ? 'Eliminar' : 'Agregar'} como favorito`}
      style={{ minWidth: 'initial' }}
      onClick={onClick}>
      {fav
        ? <Star style={{color: '#3cd372'}} />
        : <StarBorder style={{color: '#6b6b6b'}}/>
      }
      {message && <span className='BtnFav__msg' style={{fontSize: '.7em'}}>{message}</span>}
   </Button>
  );
}

export default BtnFav;