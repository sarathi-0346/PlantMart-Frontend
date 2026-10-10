import { Link } from "react-router-dom";
import { FaUserCircle, FaLeaf, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex bg-white px-20 py-5 shadow-[0px_2px_20px_rgba(0,0,0,0.6)] sticky top-0">
      <div className="flex flex-row justify-center items-center gap-100 whitespace-nowrap ">
        <div>
          <h1 className="flex flex-row gap-0009 text-[#1C3A2E] font-kalnia text-2xl font-semibold">
            PlantMart
            <FaLeaf className="ml-2 inline text-[#1C3A2E] text-3xl" />
          </h1>
        </div>

        <nav>
          <ul className="flex flex-row gap-12">
            <li>
              <Link to="/">
                <h3 className="font-kalnia text-xl font-medium text-[#1C3A2E] hover:underline underline-offset-2  hover:text-green-500 transition-colors duration-300 cursor-pointer">
                  Home
                </h3>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <h3 className="font-kalnia text-xl font-medium text-[#1C3A2E]  hover:underline underline-offset-2  hover:text-green-500 transition-colors duration-300 cursor-pointer">
                  About
                </h3>
              </Link>
            </li>

            <li>
              <Link to="/collection">
                <h3 className="font-kalnia text-xl font-medium text-[#1C3A2E]  hover:underline underline-offset-2  hover:text-green-500 transition-colors duration-300 cursor-pointer">
                  Collection
                </h3>
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <h3 className="font-kalnia text-xl font-medium text-[#1C3A2E]  hover:underline underline-offset-2  hover:text-green-500 transition-colors duration-300 cursor-pointer">
                  Service
                </h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-row h-10 w-100 items-center gap-6 justify-center align-center ml-15">
        <FaShoppingCart className="text-[#1C3A2E] w-6 h-6 cursor-pointer" />
        <FaUserCircle className="text-[#1C3A2E] w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
