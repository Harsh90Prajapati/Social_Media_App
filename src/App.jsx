/* eslint-disable no-unused-vars */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Create_Post from "./components/Create_Post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post_List_Store";

function App() {
  const [seletedSideButton , setSeletedSideButton] = useState("Home")
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setFormData("")
  };
 
  return (
    <PostListProvider>
    <div className="h-screen select-none">
      <Header username={formData.username} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? (
        <div className="sm:flex">
        <Sidebar seletedTab={seletedSideButton}  setSeletedTab={setSeletedSideButton} />
        <div className="w-full h-full">
         { seletedSideButton ==="Home"?
         <PostList username={formData.username}/>
         :
         <Create_Post />
         } 
        <Footer />
        </div>
      </div>
      ) : (
        <div className="flex justify-center items-center h-4/5 ">
        <form onSubmit={handleFormSubmit} className=" flex flex-col justify-center gap-3 items-center w-96  rounded-xl shadow-lg p-3">
          <label className="w-full">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border-2 w-full rounded-md px-2 py-1 mt-1 outline-none border-blue-500"
            />
          </label>
          <label className="w-full">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="border-2 w-full rounded-md outline-none border-blue-500 px-2 py-1 mt-1"
            />
          </label>
          {/* <label className="w-full">
            Confirm Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border-2 w-full rounded-md border-blue-500 px-2 py-1 mt-1"
            />
          </label> */}
          <button type="submit"className="bg-blue-600 w-full text-white text-center py-2 hover:bg-indigo-600 rounded-md">Login</button>
        </form>
        </div>
      )}
      
    </div>
    </PostListProvider>
  );
}

export default App;
