import React , {Component} from "react"
import loading from './loading.gif'


class Spinner extends Component{
    render(){
        return(
            <div className="container text-center mt-2">
                <img src={loading} alt="loading-gif" width='60px' height="60px"/>
            </div>
        )
    }
}

export default Spinner