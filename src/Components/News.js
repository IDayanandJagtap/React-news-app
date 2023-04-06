import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// import { ReactPropTypes } from "react";


class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general",
        pageSize: 9,
    }
    // static propTypes = {
    //     country: ReactPropTypes.string,
    //     category: ReactPropTypes.string,
    //     pageSize: ReactPropTypes.number
    // }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1,
            pageSize: 20,
            totalResults: 1,
            loading: true,
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonk`
    }
    async updateNews() {
        let url;
        this.props.query ? url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page}` :
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page}`;

        this.setState({ loading: true })
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

// This function won't work because it is not an arrow function so props of the parent cha kahitri vishay asto.
    // async fetchMoreData(){
    //     this.setState({ page: this.state.page + 1 });
    //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`);
    //     data = await data.json();
    //     this.setState({
    //         articles: this.state.articles.concat(data.articles),
    //         totalResults: data.totalResults,
    //         loading: false
    //     });
    // }
    fetchMoreData = async() =>{
        this.setState({ page: this.state.page + 1 });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd1a6c4b7f974b108777bcd12fcdb5ea&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`);
        data = await data.json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false
        });
    }
    render() {
        return (
            <>
                <div className="heading my-4 text-center">
                    <h1>NewsMonk - Top in {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
                    {this.state.loading && <Spinner /> }
                </div>
                {this.state.articles !== undefined &&
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.totalResults}
                    loader={<Spinner />}
                    endMessage= {<p className="text-center" >That's all ... </p>}
                >
                <div className="container my-4">
                    <div className="row">
                        {
                            !this.state.loading && this.state.articles.map((elem) => {
                                return (
                                    <div className="col-md-4 my-3" key={elem.url}>
                                        <NewsItem title={elem.title ? elem.title.length > 43 ? elem.title.slice(0, 43) : elem.title : ""} description={elem.description ? elem.description.slice(0, 88) : ""}
                                            urlToImage={elem.urlToImage} urlToNews={elem.url} author={elem.author} publishedAt={elem.publishedAt} source={elem.source.name} />
                                    </div>
                                )
                            })

                        }
                    </div>
                    </div >
                </InfiniteScroll>}
            </>
        )
    }
}

export default News;