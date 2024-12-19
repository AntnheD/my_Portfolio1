
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; // Example component
import Header from './components/Header';
import './App.css';
function App() {
  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Example route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;