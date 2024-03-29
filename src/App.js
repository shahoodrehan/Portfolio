import './App.css';
import { NavBar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import Profile from './Components/Profile';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import { Contact } from "./Components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Profile/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>    
    </div>
  );
}

export default App;
