import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <p> hello </p>
      <Header />
      <Sidebar />
    </header>
  </div>
);


