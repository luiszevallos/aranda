import React from 'react';
import { Button } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';

const BtnFav = ({ fav, onClick, message }) => {
  return (
    <Button
      style={{ minWidth: 'initial' }}
      onClick={onClick}>
      {fav
        ? <Star style={{color: '#3cd372'}} />
        : <StarBorder style={{color: '#6b6b6b'}}/>
      }
      {message && <span style={{fontSize: '.7em'}}>{message}</span>}
   </Button>
  );
}

export default BtnFav;