import { useWeather } from "../Context";
import { CardComponent } from "./Card";

export const Right = () => {
    const { data } : any = useWeather();
    const details = { ...data?.main, ...data?.wind }
    const entries = Object.entries(details);

    return(
       <>
            <div className="d-flex flex-column h-100">
                <div className="row">
                    {entries.map((data : any, index : number) => {
                        return(
                            <div className={`col-6 col-sm-4  mb-3 ${entries.length === 11 ? "col-xl-3" : "col-xl-4"}`} key={index}>
                                <CardComponent data={data} />
                            </div>
                        )
                    })}
                </div>
                <div className="mt-auto">
                    <p className="font-italic fs-6 text-muted">
                        Thanks for  <a href="https://bas.dev/">Bas Milius</a> providing a free weather icon and
                        and all the weather data is from the <a href="https://openweathermap.org/api">OpenWeather</a>
                    </p>
                </div>
            </div>
       </>
    )
}