import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (<>
    <h1>APP Component</h1>

    <Routes>
      <Route path='/' element={Home} />
    </Routes>
  </>)
}
export default App;

