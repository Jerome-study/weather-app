export const CardComponent = (props : any) => {
    const { data } = props;
    const unit = data[0].includes("temp") || data[0].includes("feels_like") ? "°C" 
    : data[0].includes("level") || data[0].includes("pressure") ? "hPa" 
    : data[0].includes("humidity")? "%" 
    : data[0].includes("speed") || data[0].includes("gust") ? "m/s"
    : "°"
    return(
        <div className="card rounded-4 shadow-sm">
            <div className="card-body text-center">
                <h1 className="fs-5 fw-300 text-capitalize mb-4">{data[0]}</h1>
                <p className="display-6 d-flex gap-1 fw-700 text-secondary justify-content-center">{data[1]}<span className="fs-6 fw-700">{unit}</span></p>
            </div>
        </div>
    )
}