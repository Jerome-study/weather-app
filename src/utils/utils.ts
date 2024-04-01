export const API_KEY = import.meta.env.VITE_API_KEY;

export const convertDate = (timezone : number) => {
    const localTime = new Date().getTime()
    const localOffset = new Date().getTimezoneOffset() * 60000
    const currentUtcTime = localOffset + localTime
    const cityOffset = currentUtcTime + 1000 * timezone
    return {
        time: new Date(cityOffset).toLocaleTimeString(),
        date: new Date(cityOffset).toDateString()
    }
};

export const dayOrNight = (sunset : number) => {
    const result = new Date().valueOf() / 1000 < sunset ? "Day" : "Night"
    return result;
};


const condition: Record<string, any> = {
    "01d": "/clear-day.svg",
    "01n": "/clear-night.svg",
    "02d": "/partly-cloudy-day.svg",
    "02n": "/partly-cloudy-night.svg",
    "03d": "/cloudy.svg",
    "03n": "/cloudy.svg",
    "04d": "/overcast-day.svg",
    "04n": "/overcast-night.svg",
    "09d": "/partly-cloudy-day-rain.svg",
    "09n": "/partly-cloudy-night-rain.svg",
    "010d": "/rain.svg",
    "010n": "/rain.svg",
    "011d": "/thunderstorms-day-rain.svg",
    "011n": "/thunderstorms-night-rain.svg",
    "013d": "/snow.svg",
    "013n": "/snow.svg"
};

export const image = (icon : string) => {
    return condition[icon];
};