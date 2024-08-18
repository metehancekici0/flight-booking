import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { formatTime, getAirlineNameByIATA, getAirportIATA, getCountryNameByIATA } from '../../helpers/helpers';

const initialState = {
    airlines: [],
    flightsData: [],
    filteredFlightsData: [],
    filters: {
        arrivalTime: "All",
        flightDirection: "All",
        airlinesIncluded: "All"
    }
}

// server tarafında oluşturulan endpoint'e get isteği ile uçuş verilerinin alınması.
export const fetchFlights = createAsyncThunk("flights/fetchFlights", async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/flights");
        const flights = response.data;
        // kontrol için
        // console.log(flights)
        return flights;
    } catch (error) {
        console.log("hata: ", error.message);
    }
})

// Her bir uçuş verisine göre airline adlarının tekrar etmeyecek şekilde alınması. (Not: filtreleme kısmı için)
export const getAirlines = createAsyncThunk("flights/getAirlines", async (flights) => {
    // Her bir uçuşun airlineIATA koduna göre airlineName bilgisinin alınması
    const airlineNames = flights.map((flight) => getAirlineNameByIATA(flight.prefixIATA));

    // airlineName verilerini tekrar etmeyecek şekilde ayarlıyoruz.
    const uniqueAirlines = Array.from(new Set(airlineNames));

    // airlineName verilerini id ve name içeren nesnelere çeviriyoruz.
    const airlineObjects = uniqueAirlines.map((airline) => ({
        // (Not: filtreleme kısmında htmlFor ve id kısımları için)
        id: airline.toLowerCase().replace(/\s+/g, "-"),
        name: airline,
    }));
    return airlineObjects;
})

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Filtreleme işlemleri
        setFilter: (state, action) => {
            // filterName'e göre state.filters'ın güncellenmesi
            switch (action.payload.filterName) {
                case "arrivalTime":
                    state.filters.arrivalTime = action.payload.value
                    break;

                case "flightDirection":
                    state.filters.flightDirection = action.payload.value
                    break;

                case "airlinesIncluded":
                    state.filters.airlinesIncluded = action.payload.value
                    break;
            }
            // Kısaca tüm filtreleme işlemlerini resetleyerek state.filters'daki filtreleme işlemlerini gerçekleştirmek.  
            state.filteredFlightsData = state.flightsData
            if (state.filters.arrivalTime != "All") {
                state.filteredFlightsData = state.filteredFlightsData.filter((flight) => {
                    return flight.arrivalTime.slice(-2) == state.filters.arrivalTime ? flight : ""
                })
            }
            if (state.filters.flightDirection != "All") {
                state.filteredFlightsData = state.filteredFlightsData.filter((flight) => {
                    return flight.flightDirection == state.filters.flightDirection ? flight : ""
                })
            }
            if (state.filters.airlinesIncluded != "All") {
                state.filteredFlightsData = state.filteredFlightsData.filter((flight) => {
                    return flight.airlineName == state.filters.airlinesIncluded ? flight : ""
                })
            }
        }
    },
    extraReducers: (builder) => {
        // fetchFlights methodu başarılı olarak tamamlandıktan sonra istenilen verilerin elde edilmesi.
        builder.addCase(fetchFlights.fulfilled, (state, action) => {
            const flightData = action.payload.map(flight => ({
                flightName: flight.flightName,
                airlineName: getAirlineNameByIATA(flight.prefixIATA) || "",
                flightDirection: flight.flightDirection,
                departureIATA: getAirportIATA(flight.flightDirection, flight.route.destinations[0]).departureIATA,
                arrivalIATA: getAirportIATA(flight.flightDirection, flight.route.destinations[0]).arrivalIATA,
                departureTime: formatTime(flight.scheduleDateTime),
                arrivalTime: formatTime(flight.estimatedLandingTime),
                arrivalCity: getCountryNameByIATA(flight.flightDirection, flight.route.destinations[0]).arrivalCity,
                departureCity: getCountryNameByIATA(flight.flightDirection, flight.route.destinations[0]).departureCity,
            }));
            // kontrol için
            // console.log("flightData: ", flightData)
            // flightData ve bir adet filtreleme işlemleri için kopyasına atama işlemleri
            state.flightsData = flightData;
            state.filteredFlightsData = flightData;
        })
            .addCase(getAirlines.fulfilled, (state, action) => {
                state.airlines = action.payload;
            })
    }
})

export const { setFilter } = appSlice.actions

export default appSlice.reducer