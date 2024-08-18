import { IoAirplane, IoEarth } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-5">
      <Link to="/" className="logo flex items-center">
        <div className="icon relative w-9 h-9 sm:w-8 sm:h-8">
          <IoAirplane className="text-[#F6F4F8] relative z-10 top-1/2 text-3xl -translate-y-1/2 -left-1" />
          <span className="w-9 h-9 sm:w-8 sm:h-8 absolute top-0 left-0 bg-primary rounded-full"></span>
        </div>
        <h1 className="font-semibold text-lg ml-2 sm:hidden">PLANE SCAPE</h1>
      </Link>
      <div className="flex items-center gap-x-10">
        <nav>
          <ul className="flex md:hidden gap-x-2">
            <li>
              <Link to="/" className="flex gap-x-2 items-center hover:bg-black/5 px-3 py-2 rounded-full transition ease-out duration-300">
                <FaTag className="text-primary font-medium" /> <span>Deals</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-x-2 items-center hover:bg-black/5 px-3 py-2 rounded-full transition ease-out duration-300">
                <IoEarth className="text-primary font-medium" /> <span>Discover</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/my-flights"
          className="flex items-center hover:bg-black/5 px-3 sm:!p-0 sm:hover:bg-transparent py-2 rounded-full transition ease-out duration-300"
        >
          <img src="./assets/images/user.jpg" className="w-9 h-9 sm:w-8 sm:h-8 rounded-full" alt="" />
          <span className="text-sm ml-1">Joane Smith</span>
        </Link>
      </div>
    </header>
  );
}
