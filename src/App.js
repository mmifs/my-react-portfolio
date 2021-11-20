import React, { useState } from 'react';
import Nav from './components/Nav';
import PortfolioThumbs from './components/PortfolioThumbs';
import ContactForm from './components/Contact';
import Footer from "./components/simple-react-footer";


function App() {
  const [categories] = useState([
    { name: 'about', description: 'This section is all about me', },
    { name: 'apps', description: 'My best web applications!', },
    { name: 'resume', description: 'Learn about my previous work experience!', },
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
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
