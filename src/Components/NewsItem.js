import React, { Component } from "react"


// API KEY : fd1a6c4b7f974b108777bcd12fcdb5ea

class NewsItem extends Component {
    render() {
        let {title, description, urlToImage, urlToNews} = this.props;

        return (
            <div className="card" style={{width: "18rem", height:"420px",  overflow:"hidden"}}>
                <img src={urlToImage} className="card-img-top" alt="..." height='200px'/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={urlToNews} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
                    </div>
            </div>
        )
    }
}

export default NewsItem;