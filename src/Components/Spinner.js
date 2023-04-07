import React  from "react"
import loading from './loading.gif'


const Spinner = () =>{
        return(
            <div className="container text-center my-2">
                <img src={loading} alt="loading-gif" width='50px' height="50px"/>
            </div>
        )
}

export default Spinner