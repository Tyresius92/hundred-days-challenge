import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (isOpen) {
    return (
      <div className="modal" id="modal">
        {title && <h2>{title}</h2>}
        <div className="content">{children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            Close Modal
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
