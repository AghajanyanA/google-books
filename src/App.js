import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchFieldContainer from './components/header/SearchFieldContainer';
import RenderRoutes from './routes/RenderRoutes';


function App() {

  return (
    <BrowserRouter>
      <SearchFieldContainer />
      <div>
          <RenderRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
