import { Left } from "./Left";
import { Right } from "./Right";

export const Dashboard = () => {
    return(
        <>  
            <div className="row dashboard-height">
                <div className="col-12 col-xl-4 py-5 px-4 dashboard-border h-100">
                    <Left />
                </div>
                <div className="col-12 col-xl-8 py-5 px-4">
                    <Right />
                </div>
            </div>
        </>
    )
}