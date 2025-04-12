import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import CreateForm from './components/CreateForm';
import About from './components/About';


const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/AddCard' element={<CreateForm />} />
          <Route path='/About' element={<About />} />

        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App

