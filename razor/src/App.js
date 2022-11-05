import React from "react";
import Routes from "./routes";
import NossaEquipe from "./components/squad.jsx";
import Form from "./components/Form.jsx";
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton.js";

function App() {
  return (
    <>
      <Fragment>
        <Routes />
        <Form />
        <NossaEquipe />
        <ScrollButton />
      </Fragment>
    </>
  );
}

export default App;
