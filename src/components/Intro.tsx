import { useState } from "react"
import { useWeather } from "./Context";

export const IntroComponent = () => {
    const { loading, validate, setValidate, setInput } : any = useWeather();
    const [city, setCity] = useState<string>("");

    const searchCity = () => {;
        if (!city) return setValidate("city is required");
        setInput(city);
     };
    
    return(
        <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="">
                <h1 className="display-1 fw-600 text-center">Weather App</h1>
                <p className="fs-4 text-secondary text-center">Let Wind Power Your Life!</p>
                <div className="d-flex flex-column flex-lg-row gap-2 px-3 g-0 px-lg-0">
                    <div className="col-12 col-lg-10">
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control w-100" placeholder="Search a city...." />
                        <span className="d-none d-lg-block text-danger text-start mt-2">{validate}</span>
                    </div>
                    <div className="col-12 col-lg-2">
                        <button disabled={loading} onClick={searchCity} className="btn btn-primary w-100">Search</button>
                    </div>
                    <span className="d-lg-none text-danger text-center mt-2">{validate}</span>
                </div>
            </div> 
        </div>
    )
}