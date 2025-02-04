
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PostList from './components/PostList';

import './App.css';
import LandingPage from './components/LandingPage';
import { MyProfile } from './components/MyProfile';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className='lg:p-10 p-5 lg:h-40 h-24'>
          
          
          <div className="nav-links flex flex-row justify-around w-full items-center">
          <div className='flex flex-row ml-0'>
         <div className='mr-2'>
          <a href="/" className='flex flex-row'>Create Post</a> </div>
         <div className='mr-2'>
          <a href="/myposts">My Posts</a></div>
         <div>
          <a href="/explore">Explore</a></div></div>
          <a href="/" className='lg:text-6xl text-4xl font-semibold'>Blogly</a>
            <div className='flex flex-row'>
            <div className='mr-2'>
              <a href="/profile">My Profile</a>
            <a href="/register" >Register</a></div>
            <a href="/login">Login</a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/profile" element={<MyProfile/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/myposts" element={<PostList />} />
          <Route path="/new-post" element={<CreatePost />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
