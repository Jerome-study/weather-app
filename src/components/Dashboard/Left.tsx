import { useWeather } from "../Context";
import { useState } from "react";
import { dayOrNight } from "../../utils/utils";
import { convertDate } from "../../utils/utils";

export const Left = () => {
    const { data, validate, setValidate, setInput } : any = useWeather();
    const [city, setCity] = useState("");

    const searchCity = () => {
       if (!city) return setValidate("city is required");
       if (data?.name.toLowerCase() == city.toLowerCase() &&  data?.name.toLowerCase().includes(city)) return;
       setInput(city);
    };

    return(
        <div>
                <div className="d-flex gap-2">
                    <p className="text-danger text-center my-2 text-capitalize position-absolute top-0">{validate}</p>
                    <input type="text" className="form-control" placeholder="search" value={city} onChange={(e) => setCity(e.target.value)}/>
                    <button className="btn btn-primary" onClick={searchCity}>Search</button>
                </div>
                <div className="text-center">
                    <img className="w-100" src={`/${data?.weather[0].icon}.svg`} alt="weather-icon" style={{ maxWidth: "14rem"}} />
                    <h1 className="display-3 text-secondary fw-800 d-flex justify-content-center">{data?.main?.temp}<span className="display-6 fw-700">°C</span></h1>
                    <p className="text-capitalize fs-3 fw-300">{data?.weather[0].description}</p> 
                <div>
                    <p className="m-0">{dayOrNight(data?.sys.sunset)}</p>
                    <p className="m-0">{convertDate(data?.timezone).date}</p>
                    <p className="m-0">{convertDate(data?.timezone).time}</p>
                    <h1 className="fs-2 fw-300 text-center mt-4">{data?.name}</h1>
                    <span className="fs-6">{data?.sys.country}</span>
                </div>
            </div>
        </div>
    )
}