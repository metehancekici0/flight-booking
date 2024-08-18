import FlightList from "./components/FlightList";

export default function MyFlights() {
  return (
    <main className="flex flex-col w-full">
      <h1 className="text-xl mb-5">My Flights</h1>
      <FlightList />
    </main>
  );
}
