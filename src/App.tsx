import React from 'react';
import "./styles/styles.css"
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
