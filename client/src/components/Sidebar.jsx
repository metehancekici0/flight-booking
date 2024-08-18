import { IoCarSportOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsUmbrella } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 xl:w-full sm:flex-wrap xl:mt-10 flex flex-col xl:grid xl:grid-cols-3 xl:grid-flow-col sm:!flex xl:gap-5 flex-shrink-0 gap-y-5 text-white">
      <Link to="/" className="w-full rounded-xl overflow-hidden relative group max-w-80">
        <img src="./assets/images/car-travelling.jpg" className="w-full aspect-square object-cover rounded-xl" alt="" />
        <div className="bg-box group-hover:opacity-100"></div>
        <div className="bg-content">
          <span>
            <IoCarSportOutline className="text-2xl" />
          </span>
          <h3 className="font-semibold text-lg md:text-base sm:!text-sm">CAR RENTALS</h3>
          <div className="flex gap-x-1 items-center text-sm opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <BsArrowRightCircleFill /> <span className="text-xs">Read more</span>
          </div>
        </div>
      </Link>
      <Link to="/" className="w-full rounded-xl overflow-hidden relative group max-w-80">
        <img src="./assets/images/hotels.jpg" className="w-full aspect-square object-cover rounded-xl" alt="" />
        <div className="bg-box group-hover:opacity-100"></div>
        <div className="bg-content">
          <span>
            <FaRegBuilding className="text-2xl" />
          </span>
          <h3 className="font-semibold text-lg md:text-base sm:!text-sm">HOTELS</h3>
          <div className="flex gap-x-1 items-center text-sm opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <BsArrowRightCircleFill /> <span className="text-xs">Read more</span>
          </div>
        </div>
      </Link>
      <Link to="/" className="w-full rounded-xl overflow-hidden relative group max-w-80">
        <img src="./assets/images/suitcase.jpg" className="w-full aspect-square object-cover rounded-xl" alt="" />
        <div className="bg-box group-hover:opacity-100"></div>
        <div className="bg-content">
          <span>
            <BsUmbrella className="text-2xl" />
          </span>
          <h3 className="font-semibold text-lg md:text-base sm:!text-sm">TRAVEL PACKAGES</h3>
          <div className="flex gap-x-1 items-center text-sm opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <BsArrowRightCircleFill className="sm:w-2 sm:h-2" /> <span className="text-xs sm:text-[10px]">Read more</span>
          </div>
        </div>
      </Link>
    </aside>
  );
}
