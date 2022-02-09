import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import { Routes } from './routes';
import { GlobalStyle } from "./styles/globals";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
};

export default App;
