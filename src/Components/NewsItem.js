import React, { Component } from "react"


// API KEY : fd1a6c4b7f974b108777bcd12fcdb5ea

class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, urlToNews, author, publishedAt, source } = this.props;

        return (
            <div className="card " >
                <img src={urlToImage} className="card-img-top" alt="..." height='200px' />
                <div className="card-body">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left: '90%', zIndex: 1}}>{source}</span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By - {!author ? "Unknown" : author} on {new Date(publishedAt).toUTCString()}</small></p>
                    <div className="d-flex  align-items-end justify-content-end">
                        <a href={urlToNews} rel="noreferrer" target="_blank" className="btn btn-primary ">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;