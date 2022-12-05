import "./App.css";
import Home from "./components/home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import AboutUs from "./components/about/AboutUs";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Container from "./contextApi/Container.js"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import AccountClosure from "./components/accountClosure/AccountClosure";
import LoggedPage from "./components/loggedPage/LoggedPage";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <Container>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
       
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        {/*   <Route path="*" element={<NoPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/deactivateAccount" element={<AccountClosure />} />
        <Route path="/loggedPage" element={<LoggedPage />} />
      
      </Routes>
    
   
    </BrowserRouter>
    <Footer/>
    </Container>
  );
}

export default App;
