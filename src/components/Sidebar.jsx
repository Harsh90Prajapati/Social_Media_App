/* eslint-disable react/prop-types */
import { FaHome } from "react-icons/fa";
import { RiFolderAddFill } from "react-icons/ri";
const Sidebar = ({ seletedTab , setSeletedTab }) => {

   const handleOnClick =(tabName)=>{
       setSeletedTab(tabName)
   }

  return (
  <>
    <div
      className="sm:flex flex-column flex-shrink-0 p-3  text-bg-dark hidden"
      style={{ width: "240px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto text-center">
        <li onClick={() => { handleOnClick("Home"); } }>
          <a href="#" className={`nav-link text-white ${seletedTab === "Home" && "active"}`} aria-current="page">
            Home
          </a>
        </li>
        <li onClick={() => { handleOnClick("Create Post"); } }>
          <a href="#" className={`nav-link text-white ${seletedTab === "Create Post" && "active"}`}>
            Create Post
          </a>
        </li>
      </ul>
    </div>

    {/*mobile view*/}
    <div
      className="flex flex-shrink-0 p-1 border-b-2 justify-center items-center  sm:hidden">
        <ul className="nav nav-pills flex-row flex justify-between mb-auto mx-auto max-w-[250px] w-full text-center">
          <li onClick={() => { handleOnClick("Home"); } }>
            <a href="#" className={`nav-link ${seletedTab === "Home" && "active"}`} aria-current="page">
            <FaHome size={22} />
            </a>
          </li>
          <li onClick={() => { handleOnClick("Create Post"); } }>
            <a href="#" className={`nav-link  ${seletedTab === "Create Post" && "active"}`}>
            <RiFolderAddFill size={22}  />
            </a>
          </li>
        </ul>
      </div>  
  </>
    
  );
};

export default Sidebar;
