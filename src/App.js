import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Jumbotron from './components/Jumbotron';
import Footer from "./components/Footer";
import reactLogo from "./images/reactjs.png";
import jsLogo from "./images/js.jpg";
import javaLogo from "./images/java-logo-600x400.jpg";
import pythonLogo from "./images/python-600x400.png";



function App() {


  const [cards] = useState([
    {
      title: 'React',
      content: 'Web Technology - Front End',
      url: reactLogo,
      buttonName: 'Learn more'
    },
    {
      title: 'JS',
      content: 'Web Technology - Front End',
      url: jsLogo,
      buttonName: 'Learn more'
    },
    {
      title: 'JAVA',
      content: 'Web Technology - Back End',
      url: javaLogo,
      buttonName: 'Learn more'
    },
    {
      title: 'Python',
      content: 'Web Technology - Back End',
      url: pythonLogo,
      buttonName: 'Learn more'
    },
  ]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <div className="App">
        <Navbar />

        <div className="container mt-4">
          <Jumbotron />
        

          <div className="cards">
            <div className="row">
            {
              cards.map(card => (
                <Card title={card.title} content={card.content} url={card.url} buttonName={card.buttonName} />
              ))
            }
            </div>
          </div>
        </div>
        

        <Footer 
           fecha={fecha}
        />
      </div>
    </Fragment>
  );
}

export default App;