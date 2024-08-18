import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Router } from "../router";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchFlights, getAirlines } from "../redux/slices/appSlice";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFlightsAndAirlines = async () => {
      // Uçuş bilgilerini redux toolkit'den gelen yöntem olan unwrap ile alıyoruz.
      // (unwrap: başarılı işlem veya hata sonucu almak için)
      const fetchedFlights = await dispatch(fetchFlights()).unwrap();

      // Gelen her bir uçuş verisinin airlineIATA koduna göre airline ismini elde ediyoruz. (Filtreleme alanı için)
      dispatch(getAirlines(fetchedFlights));
    };

    loadFlightsAndAirlines();
  }, [dispatch]);

  return (
    <div className="container h-full xl:h-auto flex mx-auto py-10">
      <div className="bg-[#F6F4F8] rounded-3xl w-full shadow-lg">
        <div className="card h-full">
          <Header />
          <div className="flex px-5 sm:px-3 gap-x-8 pb-4 h-[calc(100%-84px)] xl:h-auto xl:flex-col">
            <Router />
            <Sidebar />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
