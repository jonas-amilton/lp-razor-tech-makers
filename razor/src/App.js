import React from 'react';
import Routes from './routes';
import NossaEquipe from './components/squad.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';

function App() {
  return (
    <>
    <Routes />
    <Form />
    <NossaEquipe />
    <Footer />
    </>
  );
}

export default App;
