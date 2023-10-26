import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <Routes>

    <Route path='/' element={<Layout></Layout>}>
     <Route index element={<Home></Home>}></Route>
     

    </Route>


      </Routes>
    </div>
  );
}

export default App;
