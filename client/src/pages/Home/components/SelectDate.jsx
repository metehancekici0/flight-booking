import { IoAirplane } from "react-icons/io5";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useState } from "react";
export default function SelectDate() {
  const [roundTrip, setRoundTrip] = useState(true);
  return (
    <div className="bg-white p-5 rounded-xl w-full h-fit border border-black/10 border-solid">
      <div className="flex items-center justify-between sm:flex-col sm:gap-y-3 sm:items-start">
        <div className="flex items-center gap-x-2">
          <IoAirplane /> <h2 className="font-semibold text-base">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex sm:ml-auto">
          <button
            onClick={() => {
              setRoundTrip(true);
            }}
            className={`rounded-tl-full rounded-bl-full text-xs px-3 h-9 flex items-center ${roundTrip ? "bg-btnPrimary text-btnSecondary" : "bg-btnSecondary text-btnPrimary"} `}
          >
            Round trip
          </button>
          <button
            onClick={() => {
              setRoundTrip(false);
            }}
            className={`rounded-tr-full rounded-br-full text-xs px-3 h-9 flex items-center ${!roundTrip ? "bg-btnPrimary text-btnSecondary" : "bg-btnSecondary text-btnPrimary"} `}
          >
            One way
          </button>
        </div>
      </div>
      <div className="flex md:flex-col md:gap-y-5 gap-x-5 mt-5">
        <div className="w-1/2 md:w-full flex sm:flex-col sm:gap-y-[2px] gap-x-[2px]">
          <div className="relative h-9 w-1/2 sm:w-full">
            <input
              type="date"
              className="rounded-tl-full rounded-bl-full sm:rounded-full border-2 border-solid border-black/10 h-full w-full pl-9 pr-1 text-sm"
            />
            <FaPlaneArrival className="absolute top-1/2 left-3 -translate-y-1/2 text-primary" />
          </div>
          <div className="relative h-9 w-1/2 sm:w-full">
            <input
              type="date"
              className="rounded-tr-full rounded-br-full sm:rounded-full border-2 border-solid border-black/10 h-full w-full pl-9 pr-1 text-sm"
            />
            <FaPlaneDeparture className="absolute top-1/2 left-3 -translate-y-1/2 text-primary" />
          </div>
        </div>
        <div className="w-1/2 md:w-full flex sm:flex-col sm:gap-y-[2px] gap-x-[2px]">
          <div className="relative h-9 w-1/2 sm:w-full">
            <input
              type="time"
              className="rounded-tl-full rounded-bl-full sm:rounded-full border-2 border-solid border-black/10 h-full w-full pl-9 pr-1 text-sm"
            />
            <FaPlaneArrival className="absolute top-1/2 left-3 -translate-y-1/2 text-primary" />
          </div>
          <div className="relative h-9 w-1/2 sm:w-full">
            <input
              type="time"
              className="rounded-tr-full rounded-br-full sm:rounded-full border-2 border-solid border-black/10 h-full w-full pl-9 pr-1 text-sm"
            />
            <FaPlaneDeparture className="absolute top-1/2 left-3 -translate-y-1/2 text-primary" />
          </div>
        </div>
      </div>
      <button className="bg-btnPrimary text-btnSecondary rounded-lg h-10 px-4 flex items-center text-sm font-medium mt-6 hover:text-white transition ease-out duration-300">
        Show flights
      </button>
    </div>
  );
}
