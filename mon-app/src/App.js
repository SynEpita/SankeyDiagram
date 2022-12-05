import './App.css';
import imgjuicygirl from './image/juicy-girl.png';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import imgres from './image/image.png';

export default function App() {
  return(
  <BrowserRouter>
    
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/diagram" element={<Diagram/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploadName, setUploadName] = useState('Choisir un fichier');

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
    setUploadName(event.target.value.split("\\").pop());
	};

	const handleSubmission = () => {
    navigate('/diagram');
	};

  return (
    <div className="App">
      <div className="container">
        <h1>Financial Sankey</h1>
        <div className="dlbar">
          <input id="file" className="dl2" type="file" name="file" onChange={changeHandler} />
          <label for="file" className="btn-dl spacebtn">{uploadName}</label>
          <div>
            <button className="btn-dl" onClick={handleSubmission}>Valider l'envoi</button>
          </div>
        </div>
        <img src={imgjuicygirl}/>
        </div>
    </div>);
}

function Diagram(){
  return (
    <div className="container2">
      <h1>Graphe généré</h1>
      <div className="repartition">
        <div>
          <img src={imgres} className="graphe"/>
        </div>
      <div className="btn-bas">
        <button className="btndlres">Télécharger le résultat</button>
        <button className="btnretry">Recommencer</button>
      </div>
      </div> 

    </div>
  );
}

