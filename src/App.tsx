import * as React from 'react';

import './App.css';

import Content from './pages/content';
import ExplanationModal from './components/Modal/ExplanationModal/ExplanationModal';

function App() {
  const [closeModal, setCloseModal] = React.useState(false);

  return (
    closeModal ? <Content /> : <ExplanationModal setCloseModal={setCloseModal}/>
  );
}

export default App;
