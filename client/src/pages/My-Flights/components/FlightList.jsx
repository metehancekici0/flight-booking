import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function FlightList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // server tarafında oluşturulan endpoint'e get isteği gönderilerek veritabanındaki uçuşları almak.
        const response = await axios.get("http://localhost:3000/api/my-flights");
        setFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="w-full flex flex-col gap-y-4 overflow-auto overflow-x-hidden pr-3 xl:overflow-visible sm:pr-0">
      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index} className="bg-white rounded-xl p-5 border border-solid border-black/10 flex gap-x-5 sm:text-sm">
            <div className="h-10 w-10 border border-solid border-black/10 rounded-full flex justify-center items-center flex-shrink-0 overflow-hidden sm:hidden">
              <img src="./assets/images/alitalia.jpg" className="w-10 object-cover" alt="" />
            </div>
            <div className="flex flex-col sm:w-full">
              <h2 className="text-2xl mb-3 sm:text-lg">{flight.departureTime + " - " + flight.arrivalTime}</h2>
              <div className="flex gap-x-12 sm:flex-col">
                <div className="flex flex-col">
                  <div className="font-medium">{flight.airlineName}</div>
                  <button className="text-blue-600 flex gap-x-1 items-center">
                    Flight Details <MdOutlineKeyboardArrowDown />
                  </button>
                </div>
                <div className="flex flex-col sm:border-t sm:border-b sm:border-solid sm:border-black/10 sm:w-full sm:py-3 sm:my-3">
                  <div className="font-medium">Nonstop</div>
                  <p className="text-black/85">1h 32m</p>
                </div>
                <div className="flex flex-col">
                  <div className="font-medium">{flight.departureIATA + " to " + flight.arrivalIATA}</div>
                  <p className="text-black/85">{flight.flightName}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white rounded-xl p-5 border border-solid border-black/10 flex gap-x-5 sm:text-sm">There are no flights booked...</div>
      )}
    </div>
  );
}
