
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Reviews from './Components/Reviews/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>
        <Route path="/checkout" element ={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
