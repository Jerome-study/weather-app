import { useState } from "react";

export const Dashboard = ({ data, validate, setValidate, setInput }: any) => {
    const [city, setCity] = useState("");

    const searchCity = () => {;
       if (!city) return setValidate("city is required");
       if (data?.name.toLowerCase() == city.toLowerCase() &&  data?.name.toLowerCase().includes(city)) return;
       setInput(city);
    };

    const dayOrNight = () => {
        const result = new Date().valueOf() / 1000 < data?.sys?.sunset ? "Day" : "Night"
        return result;
    };

    const convertDate = () => {
        const localTime = new Date().getTime()
        const localOffset = new Date().getTimezoneOffset() * 60000
        const currentUtcTime = localOffset + localTime
        const cityOffset = currentUtcTime + 1000 * data?.timezone
        return {
            time: new Date(cityOffset).toLocaleTimeString(),
            date: new Date(cityOffset).toDateString()
        }
    };
    
    return(
        <>  
            <div className="row dashboard-height">
                <div className="col-12 col-lg-4 py-5 px-4 dashboard-border h-100">
                    <div>
                        <div className="d-flex gap-2">
                            <input type="text" className="form-control" placeholder="search" value={city} onChange={(e) => setCity(e.target.value)}/>
                            <button className="btn btn-primary" onClick={searchCity}>Search</button>
                        </div>
                        <p className="text-danger text-center my-2 text-capitalize">{validate}</p>
                        <div className="text-center">
                            <img className="w-100" src="/partly-cloudy-day-drizzle.svg" alt="weather-icon" style={{ maxWidth: "14rem"}} />
                            <h1 className="display-3 text-secondary fw-800 d-flex justify-content-center">{data?.main?.temp}<span className="display-6 fw-700">°C</span></h1>
                            <p className="text-capitalize fs-3 fw-300">{data?.weather[0].description}</p> 
                            <div>
                                <p className="m-0">{dayOrNight()}</p>
                                <p className="m-0">{convertDate().date}</p>
                                <p className="m-0">{convertDate().time}</p>
                                <h1 className="fs-2 fw-300 text-center mt-4">{data?.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8 py-5 px-4">
                    <h1>data</h1>
                </div>
            </div>
        </>
    )
}