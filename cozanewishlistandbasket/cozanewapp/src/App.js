
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import Features from './Pages/Features';
import WishListPage from './Pages/WishlistPage';
import Contact from './Pages/Contact';
import Basketpage from './Pages/Basketpage';

function App() {
  return (
     <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<HomePage/>} /> 
        {/* <Route path="/shop" element={<Shop/>} /> */}
        <Route path="/features" element={<Features/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/wishlist" element={<WishListPage/>} />        
         <Route path="/basket" element={<Basketpage/>} />
        {/* <Route path="/contact" element={<HomePage/>} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
