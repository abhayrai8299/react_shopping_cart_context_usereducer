import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Cart from './components/Cart';
import ContextProvider from './context/Context';
function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
