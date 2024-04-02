import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
    const [input, setInput] = useState("");
    const [city] = useState(localStorage.getItem("data") || "");
    const [loading, setLoading] = useState(false);
    const [validate, setValidate] = useState("");
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            setValidate("");
            setLoading(true);
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input || city.split('"').join("")}&mode=json&units=metric&appid=${import.meta.env.VITE_API_KEY}`);
                setData(response.data);
                localStorage.setItem("data", JSON.stringify(response?.data?.name));
                setLoading(false);
            } catch(error : any) {
                setValidate(error?.response.data.message);
                setLoading(false) 
            }
        };

        if (city || input) {
            getData();
        }

    }, [input])

    return { city, data, loading, validate, setValidate, setInput};

}