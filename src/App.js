import React from 'react';
import './App.css';
import Person from './PersonCard/person_card';

function App() {
  return (
    <div className="App">
      <Person first_name="Meg" last_name="Nielsen" age={1} hair_color="hairColor"/>
    </div>
  );
}

export default App;