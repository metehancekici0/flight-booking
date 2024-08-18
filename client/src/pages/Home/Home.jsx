import SelectDate from "./components/SelectDate";
import FilterSide from "./components/FilterSide";
import FlightListHome from "./components/FlightListHome";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <SelectDate />
      <div className="w-full flex mt-8 md:flex-col-reverse sm:!flex-col gap-x-7 h-full sm:overflow-visible overflow-auto">
        <FlightListHome />
        <FilterSide />
      </div>
    </main>
  );
}
