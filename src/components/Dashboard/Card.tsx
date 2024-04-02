export const CardComponent = (props : any) => {
    const { data } = props;
    const details = data[0].includes("temp") || data[0].includes("feels_like") ? { unit:" °C", icon: "/celsius.svg" } 
    : data[0].includes("level") || data[0].includes("pressure") ? { unit:"hPa", icon: "/barometer.svg" } 
    : data[0].includes("humidity")? { unit:"%", icon: "/humidity.svg" } 
    : data[0].includes("speed") || data[0].includes("gust") ? { unit:"m/s", icon: "/wind.svg" } 
    : { unit: "°", icon: "/wind.svg"}
    return(
        <div className="card rounded-4 shadow-sm">
            <div className="card-body text-center">
                <h1 className="fs-6 fw-300 text-capitalize ">{data[0]}</h1>
                <div className="mx-auto p-0" style={{ maxWidth: "4rem"}}>
                    <img src={details?.icon} alt="" />
                </div>
                <p className="fs-5 d-flex gap-1 fw-700 text-secondary justify-content-center">{data[1]}<span className="fs-6 fw-700">{details?.unit}</span></p>
            </div>
        </div>
    )
}