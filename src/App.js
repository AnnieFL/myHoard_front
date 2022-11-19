import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './screens/home';
import Login from './screens/login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}