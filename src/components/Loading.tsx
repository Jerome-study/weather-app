export const Loading = ({ city }: { city: string }) => {
    return(
        <div className="background-dim rounded-lg w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle z-3">
            <div className="text-center w-100">
                <div className="spinner-border text-white" style={{ width: "3rem", height: "3rem"}} role="status">
                    <span className="visually-hidden w-100 d-block text-center">Loading...</span>
                </div>
                { city && 
                    <div>
                        <h1 className="text-light display-6">Retrieving City.....</h1>
                    </div>
                }
            </div>
        </div>
    )
}