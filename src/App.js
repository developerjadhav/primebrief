import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const pageSize = 30;
  const myapiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/primebrief' element={<News key='general' setProgress={setProgress} category={'general'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/business' element={<News key='business' setProgress={setProgress} category={'business'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/entertainment' element={<News key='entertainment' setProgress={setProgress} category={'entertainment'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/general' element={<News key='general' setProgress={setProgress} category={'general'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/health' element={<News key='health' setProgress={setProgress} category={'health'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/science' element={<News key='science' setProgress={setProgress} category={'science'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/sports' element={<News key='sports' setProgress={setProgress} category={'sports'} pageSize={pageSize} apiKey={myapiKey} />} />
          <Route exact path='/technology' element={<News key='technology' setProgress={setProgress} category={'technology'} pageSize={pageSize} apiKey={myapiKey} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
