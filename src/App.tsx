import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Dashboard from "./dashboard";
import "./index.css";
import { FaWallet, FaBackward, FaBell, FaMessage, FaClipboardUser, FaFolderClosed } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { BsFillFileBarGraphFill } from "react-icons/bs";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-900 h-screen flex">
        <nav className="border-r-4 border-indigo-500 h-full w-96 flex flex-col text-white py-5 px-4 gap-8">
          <div className="flex justify-between">
            <FaWallet className="h-6 w-6" />
            <FaBackward className="h-6 w-6" />
          </div>
          <div className="flex justify-start bg-slate-800 rounded-lg gap-10 px-6 py-3">
            <img
              className="rounded-full h-14 w-14 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI0eK_E9zOudk6eP1cOjZ9-JVGMHx9-k7Iw&s"
            ></img>
            <div className="flex flex-col items-start justify-center">
              <h2>Wallet App</h2>
              <span>User</span>
            </div>
          </div>
          <div className="flex flex-col h-44 justify-evenly pl-4 items-start">
            <h2>General</h2>

            <Link to={"/"} className="flex text-gray-400 items-center gap-3">
              <FaClipboardUser className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to={"/categories"} className="flex text-gray-400 items-center gap-3 ">
              <FaFolderClosed className="h-5 w-5" />
              <span>Categories</span>
            </Link>
            <Link to={"/transactions"} className="flex text-gray-400 items-center gap-3">
              <GrTransaction className="h-5 w-5" />
              <span>Transactions</span>
            </Link>
          </div>
          <div className="flex flex-col h-32 gap-1 justify-evenly pl-4 items-start">
            <h2 className="mb-1">Extras</h2>
            <Link to={"/reports"} className="flex text-gray-400 items-center gap-3">
              <BsFillFileBarGraphFill className="h-5 w-5" />
              <h3>Reports</h3>
            </Link>
            <Link to={"/settings"} className="flex text-gray-400 items-center gap-3">
              <IoIosSettings className="h-5 w-5" />
              <h3>Settings</h3>
            </Link>
          </div>
        </nav>
        <div className="w-full px-4">
          <header className="flex justify-between items-center w-full py-5">
            <div className="text-white">
              <IoSearchSharp className="h-7 w-7" />
            </div>
            <div className="text-white flex gap-6 items-center">
              <FaBell className="h-6 w-6" />
              <FaMessage className="h-6 w-6" />
              <img
                className="rounded-full h-7 w-7 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI0eK_E9zOudk6eP1cOjZ9-JVGMHx9-k7Iw&s"
              ></img>
            </div>
          </header>
          <div className="bg-slate-900 h-4/6 w-full text-white flex items-center justify-center">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<>Hello User</>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
