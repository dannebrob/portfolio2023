import { useState } from 'react';
import './App.css';
import Featured from './components/Featured';
import Blogposts from './components/Blogposts';
import Tech from './components/Tech';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Tech />
        <Featured />
        <Blogposts />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
