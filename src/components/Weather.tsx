import { IntroComponent } from "./Intro"
import { Dashboard } from "./Dashboard";
import { Loading } from "./Loading";
import { useFetch } from "../utils/utils";

export const Weather = () => {
    const { data, loading, validate, setValidate, city, setInput } = useFetch();
    return(
        <div className="bg-dark-subtle">  
            <div className="d-flex align-items-center" style={{ minHeight: "100vh"}}>
                <div className="container-lg bg-light-subtle bg-gradient rounded-lg height-change position-relative">
                    { loading && 
                        <Loading city={city} />
                    }
                    {(!data && !city) && 
                        <IntroComponent loading={loading} validate={validate} setValidate={setValidate} setInput={setInput} />
                    }
                    {data && 
                        <Dashboard data={data} validate={validate} setValidate={setValidate} setInput={setInput} />
                    }
                </div>
            </div>
        </div>
    )
}