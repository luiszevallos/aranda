import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import './styles/Message.css';

const Message = ({ message, onClickClose }) => {
  useEffect(() => {
    setTimeout(() => onClickClose(), 2000);
  }, [])
  return ReactDom.createPortal(
    <div className='Message'>
      <h5 className='Message__title'>{message?.title || ''}</h5>
      <span className='Message__description'>{message?.description || ''}</span>
      <div className='Message__pick'/>
    </div>,
    document.getElementById('modal'),
  );
}


export default Message;