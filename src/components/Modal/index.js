import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, url  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>
          {description}
        </p>
        {category === 'apps' &&
          <p>
            Click <a href={url}>here</a> to visit the app!
          </p>
        }
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
