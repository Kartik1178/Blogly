
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PostList from './components/PostList';
import { LoggedInContext } from './components/CheckLoggedIn';
import './App.css';
import LandingPage from './components/LandingPage';
import { MyProfile } from './components/MyProfile';
import CreatePost from './components/CreatePost';

const App = () => {
  const {isLoggedIn}=useContext(LoggedInContext);
  return (
    <Router>
      <div className="App">
        {isLoggedIn?(
        <nav className='lg:p-10 p-5 lg:h-40 h-24'>
          
          
          <div className="nav-links flex flex-row justify-evenly w-full items-center">
          <div className='flex flex-row ml-0 ju\'>
         <div className='mr-2'>
          <a href="/new-post" className='flex flex-row'>Create Post</a> </div>
         <div className='mr-2'>
          <a href="/myposts">My Posts</a></div>
         <div>
          <a href="/explore">Explore</a></div></div>
          <a href="/" className='lg:text-6xl text-4xl font-semibold'>Blogly</a>
            <div className='flex flex-row'>
            <div class="mr-3">
              <a href="/profile">My Profile</a>
              </div>
              <div>
              <a href="/logout">Logout</a>
              </div>
           
            </div>
          </div>
        </nav>):(
              <nav className="bg-gray-900 text-white p-4 w-full flex justify-between items-center shadow-md flex">
              <div className="text-3xl font-bold tracking-wide text-green-400 hover:text-green-300 transition-all duration-300 cursor-pointer">
                <a href="/">Blogly</a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="/login"
                  className="px-4 py-2 rounded-md border border-green-500 hover:bg-green-500 transition-all duration-300"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 transition-all duration-300"
                >
                  Register
                </a>
              </div>
            </nav>

        )}
        <Routes>
        <Route path="/profile" element={isLoggedIn === false ? <Navigate to="/login" /> : <MyProfile />} />

          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/myposts" element={<PostList />} />
          <Route path="/new-post" element={isLoggedIn===true?<CreatePost/>:<Navigate to="/register"/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
