import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {!isModalOpen && (
        <button
          className={`toggle-button ${isModalOpen ? 'off' : ''}`}
          id="centered-toggle-button"
          onClick={() => setIsModalOpen(true)}
        >
          Show me the Modal!
        </button>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Awesome Modal"
      >
        This is my modal content. It's pretty rad content, if I do say so
        myself. Frankly, I just write really great copy.
      </Modal>
    </div>
  );
};
export default App;
