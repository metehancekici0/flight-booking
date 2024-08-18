import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slices/appSlice";

export default function FilterSide() {
  const dispatch = useDispatch();
  const { airlines } = useSelector((state) => state.app);
  return (
    <div className="w-60 flex flex-col flex-shrink-0 gap-y-4 overflow-auto xl:overflow-visible h-full pr-3 xl:pr-0 lg:w-52 md:flex-row md:flex-grow md:!w-full md:mb-8 sm:!mb-0 sm:mt-8 sm:!flex-col">
      {/* <div className="flex flex-col w-full">
        <h4 className="font-semibold mb-2">Sort by:</h4>
        <select className="w-full rounded-md p-1 border border-solid border-black/10 text-sm">
          <option value="">Lowest Price</option>
          <option value="">Highest Price</option>
        </select>
      </div> */}
      <div className="flex flex-col w-full">
        <h4 className="font-semibold mb-2">Arrival Time</h4>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "arrivalTime",
                value: "All",
              })
            );
          }}
          htmlFor="all-times"
          className="flex items-center gap-x-2 p-2 cursor-pointer rounded-md hover:bg-black/5"
        >
          <input type="radio" defaultChecked id="all-times" name="arrivalTime" className="custom-radio" />
          <p className="text-sm leading-4">Show All</p>
        </label>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "arrivalTime",
                value: "AM",
              })
            );
          }}
          htmlFor="timeAm"
          className="flex items-center gap-x-2 p-2 cursor-pointer rounded-md hover:bg-black/5"
        >
          <input type="radio" id="timeAm" name="arrivalTime" className="custom-radio" />
          <p className="text-sm leading-4">00:00 AM - 11:59 AM</p>
        </label>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "arrivalTime",
                value: "PM",
              })
            );
          }}
          htmlFor="timePm"
          className="flex items-center gap-x-2 p-2 cursor-pointer rounded-md hover:bg-black/5"
        >
          <input type="radio" id="timePm" name="arrivalTime" className="custom-radio" />
          <p className="text-sm leading-4">12:00 PM - 11:59 PM</p>
        </label>
      </div>

      <div className="flex flex-col w-full">
        <h4 className="font-semibold mb-2">Flight Direction</h4>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "flightDirection",
                value: "All",
              })
            );
          }}
          htmlFor="all-directions"
          className="flex items-center gap-x-2 p-2 cursor-pointer rounded-md hover:bg-black/5"
        >
          <input type="radio" defaultChecked id="all-directions" name="flightDirection" className="custom-radio" />
          <p className="text-sm leading-4">Show All</p>
        </label>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "flightDirection",
                value: "D",
              })
            );
          }}
          htmlFor="departure"
          className="flex items-center gap-x-2 p-2 cursor-pointer rounded-md hover:bg-black/5"
        >
          <input type="radio" id="departure" name="flightDirection" className="custom-radio" />
          <p className="text-sm leading-4">Departure</p>
        </label>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "flightDirection",
                value: "A",
              })
            );
          }}
          htmlFor="arrival"
          className="flex items-center gap-x-2 p-2 cursor-pointer rounded-md hover:bg-black/5"
        >
          <input type="radio" id="arrival" name="flightDirection" className="custom-radio" />
          <p className="text-sm leading-4">Arrival</p>
        </label>
      </div>

      <div className="flex flex-col w-full">
        <h4 className="font-semibold mb-2">Airlines Included</h4>
        <label
          onClick={() => {
            dispatch(
              setFilter({
                filterName: "airlinesIncluded",
                value: "All",
              })
            );
          }}
          htmlFor="all-airlines"
          className="flex justify-between items-center gap-x-2 p-2 cursor-pointer hover:bg-black/5 rounded-md"
        >
          <div className="flex items-center gap-x-2">
            <input type="radio" defaultChecked id="all-airlines" name="airlinesIncluded" className="custom-radio" />
            <p className="text-sm leading-4"> Show All </p>
          </div>
        </label>
        {airlines &&
          airlines.map((airline, index) => (
            <label
              onClick={() => {
                dispatch(
                  setFilter({
                    filterName: "airlinesIncluded",
                    value: airline.name,
                  })
                );
              }}
              htmlFor={airline.id}
              key={index}
              className="flex justify-between items-center gap-x-2 p-2 cursor-pointer hover:bg-black/5 rounded-md"
            >
              <div className="flex items-center gap-x-2">
                <input type="radio" id={airline.id} name="airlinesIncluded" className="custom-radio" />
                <p className="text-sm leading-4"> {airline.name} </p>
              </div>
            </label>
          ))}
      </div>
    </div>
  );
}
