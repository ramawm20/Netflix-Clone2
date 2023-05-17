import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import { Routes,Route } from 'react-router-dom';
import FavList from './component/FavList';
import NavBar from './component/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorite' element={<FavList/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
