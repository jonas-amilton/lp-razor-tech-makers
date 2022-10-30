import React from "react";
import Routes from "./routes";
import NossaEquipe from "./components/squad.jsx";
import Form from "./components/Form.jsx";
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Fragment>
        <Routes />
        <Form />
        <NossaEquipe />
        <Footer />
        <ScrollButton />
      </Fragment>
    </>
  );
}

export default App;
