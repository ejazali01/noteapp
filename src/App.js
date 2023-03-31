import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import store from './store/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <div>
    <Provider store={store}>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
      
    </>
  );
}

export default App;
