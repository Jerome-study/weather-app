import { createContext, useContext } from "react";

export const AppContext = createContext({});
export const WeatherProvider = AppContext.Provider;

export const useWeather = () => {
    const weather = useContext(AppContext);
    return weather;
}