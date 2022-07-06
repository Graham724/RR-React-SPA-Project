import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to My page!</h1>
<Container>
    <Nav defaultActiveKey="/" variant="tabs" bg="dark" fill>
        <Nav.Item>
            <Nav.Link href="/" > 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about">About Me</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"projectsPage"}> 
                <Link to="/projects">My Projects</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

        </header>

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
