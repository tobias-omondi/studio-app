import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Podcast from './components/Podcast';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/gallery' element = {<Gallery/>}/>
          <Route path='/videos' element = {<Podcast/> }/>
          <Route path='/contact' element = {<Contact/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
