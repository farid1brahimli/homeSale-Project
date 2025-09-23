import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/about'} element={<About/>} />
        <Route path={'/contact'} element={<Contact/>} />
      </Routes>
      </div>
  )
}

export default App