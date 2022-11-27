import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './screens/home';
import Login from './screens/login';
import Profile from './screens/profile';

import AddCategory from './admin/screens/addCategory';
import ProfileEdit from './screens/profileEdit';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />

      <Route path="/admin/addCategory" element={<AddCategory />} />
    </Routes>
  );
}