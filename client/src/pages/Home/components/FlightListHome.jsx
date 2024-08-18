import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { useSelector } from "react-redux";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../../utils/toast";
import { useNavigate } from "react-router-dom";

export default function FlightListHome() {
  const { filteredFlightsData } = useSelector((state) => state.app);
  const navigate = useNavigate();

  const handleAddFlight = async (flight) => {
    try {
      // server tarafında oluşturalan endpoint'e post isteği ile flight obje verisinin gönderilmesi.
      await axios.post("http://localhost:3000/api/flights", flight);
      // Kullanıcıya başarılı bilgisi verilmesi.
      showToast("success", "Success! It's booked!");
      // yönlendirme
      navigate("/my-flights");
    } catch (error) {
      console.error(error);
      // Kullanıcıya başarısız bilgisi verilmesi.
      showToast("error", "Failed! An error has occurred.");
    }
  };
  return (
    <div className="flex flex-col w-full gap-y-3 overflow-auto overflow-x-hidden pr-3 xl:pr-0">
      {filteredFlightsData.length > 0 ? (
        filteredFlightsData.map((flight, index) => (
          <div key={index} className="w-full">
            <div className="w-full bg-white border border-solid border-black/10 rounded-xl rounded-bl-none p-5 flex flex-col">
              <h3 className="font-semibold mb-4">{flight.departureCity + " - " + flight.arrivalCity}</h3>
              <div className="flex sm:flex-col sm:items-start justify-between gap-x-20 xl:gap-x-10 items-center">
                <div className="flex flex-col flex-shrink-0">
                  <div className="flex gap-x-2 items-center">
                    <FaPlaneDeparture /> <span className="text-sm">Departure</span>
                  </div>
                  <div className="font-semibold mt-1">{flight.departureTime}</div>
                  <div className="text-sm">Airport: {flight.departureIATA}</div>
                </div>
                <span className="w-full h-[2px] 2xl:hidden bg-black/50"></span>
                <div className="flex flex-col items-center sm:items-start border-solid sm:mt-2 sm:mb-2 sm:border-t sm:border-b sm:border-black/10 sm:py-3 sm:w-full flex-shrink-0">
                  {/* <img src="./assets/images/alitalia.jpg" className="h-3 object-contain mb-2" alt="" /> */}
                  <p className="text-sm">{flight.airlineName} </p>
                  <IoAirplane className="h-6 w-6 text-primary" />
                  <p className="text-sm mt-2">2h 25m (Nonstop)</p>
                </div>
                <span className="w-full h-[2px] 2xl:hidden bg-black/50"></span>
                <div className="flex flex-col flex-shrink-0">
                  <div className="flex gap-x-2 items-center">
                    <FaPlaneArrival /> <span className="text-sm">Arrival</span>
                  </div>
                  <div className="font-semibold mt-1">{flight.arrivalTime}</div>
                  <div className="text-sm">Airport: {flight.arrivalIATA}</div>
                </div>
              </div>
              <div className="flex justify-between items-center sm:mt-5">
                <div className="flex flex-col mt-2">
                  <p className="font-bold text-lg text-primary">Price: $200</p>
                  <p className="text-black/85 text-sm">Round Trip</p>
                </div>
                <button
                  onClick={() => handleAddFlight(flight)}
                  className="bg-btnPrimary text-btnSecondary rounded-br-xl rounded-tl-xl translate-x-5 translate-y-5 sm:translate-y-7 py-5 px-8 sm:px-6 sm:py-3 text-sm hover:text-white transition duration-300 ease-out"
                >
                  Book Flight
                </button>
              </div>
            </div>
            <button className="bg-btnSecondary text-btnPrimary hover:underline px-6 py-3 rounded-bl-xl rounded-br-xl text-sm sm:text-[12px]">
              Check the details
            </button>
          </div>
        ))
      ) : (
        <div className="w-full">
          <div className="w-full bg-white border border-solid border-black/10 rounded-xl rounded-bl-none p-5 flex items-center gap-x-4">
            <IoIosWarning className="text-3xl text-primary" />
            There are no flights according to the criteria you are looking for...
          </div>
        </div>
      )}
    </div>
  );
}
