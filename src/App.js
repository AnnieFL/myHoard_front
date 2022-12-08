import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './screens/home';
import Login from './screens/login';
import Profile from './screens/profile';

import ProfileEdit from './screens/profileEdit';

import AddCategory from './admin/screens/addCategory';
import AddThing from './screens/addThing';
import Thing from './screens/thing';
import Category from './screens/category';
import Categories from './screens/categories';
import YourHoard from './screens/yourHoard';
import Gob from './screens/gob';
import NonExist from './screens/nonExist';
import Submissions from './admin/screens/submissions';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/yourHoard" element={<YourHoard />} />
      <Route path="/gob" element={<Gob />} />

      <Route path="/thing/:id" element={<Thing />} />
      <Route path="/category/:id" element={<Category />} />

      <Route path="/addThing" element={<AddThing />} />

      <Route path="/admin/addCategory" element={<AddCategory />} />
      <Route path="/admin/submissions" element={<Submissions />} />

      <Route path="*" element={<NonExist />} />
    </Routes>
  );
}