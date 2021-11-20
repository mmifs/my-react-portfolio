import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import PortfolioThumbs from './components/PortfolioThumbs';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    { name: 'apps', description: 'My best web applications!', },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <PortfolioThumbs currentCategory={currentCategory}></PortfolioThumbs>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
