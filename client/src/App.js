import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
