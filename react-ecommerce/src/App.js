import './App.css';
import './media.css';
import Prodetail from './components/Prodetail';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Cart from './components/Cart';


function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
    <Route path='/' element={<Homepage />}>  </Route>
    <Route path='/product/:id' element={<Prodetail />}> </Route>
    <Route path='/cart' element={<Cart />}> </Route>
      </Routes>
      </Provider>
    </>
  );
}

export default App;
