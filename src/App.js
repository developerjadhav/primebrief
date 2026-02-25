import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import NotFound from './components/NotFound';


function App() {

  // const myapiKey = process.env.REACT_APP_NEWS_API;
  const myapiKey = "5d3cd45797cc70a520033020499e19b4";
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />

        <Routes>
          <Route exact path='/' element={<News key='general' setProgress={setProgress} category={'general'} apiKey={myapiKey} />} />
          <Route exact path='/home' element={<News key='general' setProgress={setProgress} category={'general'} apiKey={myapiKey} />} />
          <Route exact path='/business' element={<News key='business' setProgress={setProgress} category={'business'} apiKey={myapiKey} />} />
          <Route exact path='/entertainment' element={<News key='entertainment' setProgress={setProgress} category={'entertainment'} apiKey={myapiKey} />} />
          <Route exact path='/general' element={<News key='general' setProgress={setProgress} category={'general'} apiKey={myapiKey} />} />
          <Route exact path='/health' element={<News key='health' setProgress={setProgress} category={'health'} apiKey={myapiKey} />} />
          <Route exact path='/science' element={<News key='science' setProgress={setProgress} category={'science'} apiKey={myapiKey} />} />
          <Route exact path='/sports' element={<News key='sports' setProgress={setProgress} category={'sports'} apiKey={myapiKey} />} />
          <Route exact path='/technology' element={<News key='technology' setProgress={setProgress} category={'technology'} apiKey={myapiKey} />} />

          {/* This will handle all undefined routes (404) */}
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;