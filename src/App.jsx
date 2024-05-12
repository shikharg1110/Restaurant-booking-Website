import { useState, useEffect, createContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.component'
import Footer from './components/footer.component';
import Body from './components/carousel.component';
import Login from './page/login.page';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactUs from './page/ContactUs';
import AboutUs from './page/AboutUs';
import Restaurant from './page/Restaurant';


export const UserContext = createContext({});

const App = () => {

  const [userAuth, setUserAuth] = useState({});

  // useEffect will run only one time
  useEffect(() => {

    // let userInSession = lookInSession("user")
    let userInSession = null;

    userInSession ?
      setUserAuth(JSON.parse(userInSession)) :
      setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path='/' element={<Body></Body>}></Route>
          <Route path='/' element={<Footer></Footer>}></Route>
          <Route path='signin' element={<Login></Login>}></Route>


          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/restaurants" element={<Restaurant />} />

        </Route>
      </Routes>
    </UserContext.Provider>
  )
}
//  "/" + "signin" = "/signin" 

export default App;