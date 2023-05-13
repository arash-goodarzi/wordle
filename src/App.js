
import './App.css';
import Wordle from './components/Wordle';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Wordle />} />
      </Routes>
        
    </div>
  );
}

export default App;
