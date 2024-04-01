import { useWeather } from "../Context";
import { CardComponent } from "./Card";

export const Right = () => {
    const { data } : any = useWeather();
    const details = { ...data?.main, ...data?.wind }
    const entries = Object.entries(details);

    return(
       <>
            <div className="row">
                {entries.map((data : any, index : number) => {
                    return(
                        <div className={`col-6 col-sm-4  mb-3 ${entries.length === 11 ? "col-xl-3" : "col-xl-4"}`} key={index}>
                            <CardComponent data={data} />
                        </div>
                    )
                })}
            </div>
       </>
    )
}