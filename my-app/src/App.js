import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Layout from './components/layout';
import Products from './pages/products';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
  return (
    <div className="App">
      <Routes>

    <Route path="/" element={<Layout></Layout>}>
     <Route index element={<Home></Home>}></Route>
     <Route path='/products' element={<Products></Products>}></Route>
     <Route path='/signin' element={<SignIn></SignIn>}></Route>
     <Route path='/signup' element={<SignUp></SignUp>}></Route>
     

    </Route>


      </Routes>
    </div>
  );
}

export default App;
