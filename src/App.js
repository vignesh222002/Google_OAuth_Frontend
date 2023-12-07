import { Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
