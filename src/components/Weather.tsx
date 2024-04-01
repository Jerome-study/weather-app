import { IntroComponent } from "./Intro"
import { Dashboard } from "./Dashboard/Dashboard";
import { Loading } from "./Loading";
import { WeatherProvider } from "./Context";
import { useFetch } from "../hooks/useFetch";

export const Weather = () => {
    const { data, loading, validate, setValidate, city, setInput } = useFetch();
    
    return(
        <WeatherProvider value={ { data, loading, validate, setValidate, city, setInput } }>
            <div className="bg-dark-subtle">  
                <div className="d-flex align-items-center" style={{ minHeight: "100vh"}}>
                    <div className="container-xl bg-light-subtle bg-gradient rounded-lg height-change position-relative">
                        { loading && 
                            <Loading city={city} />
                        }
                        {(!data && !city) && 
                            <IntroComponent />
                        }
                        {data && 
                            <Dashboard />
                        }
                    </div>
                </div>
            </div>
        </WeatherProvider>
    )
}