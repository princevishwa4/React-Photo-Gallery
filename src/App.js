import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImagesGrid from './components/ImagesGrid';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const[selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImagesGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
