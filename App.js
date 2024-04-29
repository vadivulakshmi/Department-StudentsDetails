import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collage from './Collage';
import StudentsTable from './StudentsTable';

const App = () => {
  const [data, setData] = useState([
    { HOD_Name: 'Hema', Department: 'Chemistry' },
    { HOD_Name: 'Akshara', Department: 'Computer Science' },
    { HOD_Name: 'HemaLatha', Department: 'BCA' },
    { HOD_Name: 'Nirmala', Department: 'Physics' }
  ]);

  const [initialData, setInitialData] = useState({});
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Collage data={data} setData={setData} />} />
        <Route path="/StudentsTable/:HOD_Name" element={<StudentsTable initialData={initialData} setInitialData={setInitialData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
