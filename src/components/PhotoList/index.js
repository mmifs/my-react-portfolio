import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Work Feelings',
      category: 'apps',
      description: 'Work feelings is an app designed to let employees share how they are feeling on a given day. It showcases a number of technologies, including express.js, SQL, sequelize and handlebars.js to perform CRUD operations on a RESTFUL API.',
      url: 'https://mmifs.github.io/Coming_Soon/',
    },
    {
      name: 'Enviro Dashboard',
      category: 'apps',
      description: 'The enviro dashboard was my first attempt at a collaborative group project with other developers. It is a hub for information about climate change and also a showcase of front-end skills, including the BULMA CSS Library; two external, interactive APIs and a scored climate change-based quiz utilizing local storage',
      url: 'https://mmifs.github.io/Coming_Soon/',
    },
    {
      name: 'Password Generator',
      category: 'apps',
      description: 'The password generator was one of my first attempts at building an interactive application with functional javascript. It allows the user to create a randomized password given a few parameters.',
      url: 'https://mmifs.github.io/Coming_Soon/',
    },
    {
      name: 'Weather Dashboard',
      category: 'apps',
      description: 'The weather dashboard was one of my first experiences interacting with an external API. It will give a multi-day forecast for any city you can search for using the interface on the page.',
      url: 'https://mmifs.github.io/Coming_Soon/',
    },
    {
      name: 'Tech Blog',
      category: 'apps',
      description: 'The tech blog was my first attempt at building a RESTFUL API from the ground up. It supports all CRUD operations and utilizes Express.js, Handlebars.js and SQL for the database.',
      url: 'https://mmifs.github.io/Coming_Soon/',
    },
    {
      name: 'Social Network API',
      category: 'apps',
      description: 'The social network API is an example of a nosql database, and utilizes mongoose, mongodb and express to create a RESTFUL API that can perform CRUD operations on a number of pieces of data.',
      url: 'https://mmifs.github.io/Coming_Soon/',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
        {currentPhotos.map((image, i) => (
          <>
            <h1>{image.name}</h1>
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          </>
        ))}
    </div>
  );
};

export default PhotoList;
