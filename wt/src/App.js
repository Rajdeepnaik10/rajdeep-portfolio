import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';

function App() {
  return (
    <div>
      <h1>Rajdeep Naik</h1>
      <PersonalInfo />
      <ProfessionalSummary />
      <Education />
      <Skills />
      <Achievements />
    </div>
  );
}

export default App;
