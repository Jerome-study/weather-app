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
