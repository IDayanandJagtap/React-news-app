import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import { ReactPropTypes } from "react";


class News extends Component {
    static defaultProps ={
        country : "in",
        category: "general",
        pageSize: 9, 
    }
    // static propTypes = {
    //     country: ReactPropTypes.string,
    //     category: ReactPropTypes.string,
    //     pageSize: ReactPropTypes.number
    // }

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1,
            pageSize: 20,
            totalResults: 1,
            loading: true,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({loading : true})
        let data = await fetch(url);
        data = await data.json();
        this.setState({ 
            articles: data.articles,
            totalResults: data.totalResults,    
            loading: false
        });
        console.log(data.totalResults)
    }

    handlePrevOnClick = async () => {
        this.setState({ page: this.state.page - 1 });
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
        this.setState({loading : true})
        let data = await fetch(url);
        data = await data.json();
        this.setState({ 
            articles: data.articles,
            totalResults: data.totalResults , 
            loading: false
        });
    }

    handleNextOnClick = async () => {
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.setState({ page: this.state.page + 1 });

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
            this.setState({loading : true})
            let data = await fetch(url);
            data = await data.json();
            this.setState({ 
                articles: data.articles,
                totalResults: data.totalResults , 
                loading: false
            });
        }
    }

    render() {
        return (
            <div className="container my-4">
                <div className="heading my-4 text-center">
                    <h1>NewsMonk - Today's top</h1>
                    {this.state.loading && <Spinner/>}
                </div>
                <div className="row">
                    {
                        !this.state.loading && this.state.articles.map((elem) => {
                            return (
                                <div className="col-md-4 my-3" key={elem.url}>
                                    <NewsItem title={elem.title ? elem.title.length > 43 ? elem.title.slice(0, 43) : elem.title : ""} description={elem.description ? elem.description.slice(0, 88) : ""} urlToImage={elem.urlToImage} urlToNews={elem.url} />
                                </div>
                            )
                        })

                    }



                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} className="btn btn-dark btn small" onClick={this.handlePrevOnClick}>&larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark btn small" onClick={this.handleNextOnClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;