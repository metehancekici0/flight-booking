import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyFlights from "./pages/My-Flights/MyFlights";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-flights" element={<MyFlights />} />
    </Routes>
  );
}
