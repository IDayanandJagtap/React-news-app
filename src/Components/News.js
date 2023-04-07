import React , {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);


    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonk`

    const updateNews = async () => {
        
        props.setProgress(30);

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setLoading({ loading: true })
        
        let data = await fetch(url);
        props.setProgress(70);
        data = await data.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
        
        props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const fetchMoreData = async () => {
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`);
        setPage(page + 1);
        data = await data.json();
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults);
        setLoading(false);
    }

    return (
        <>
            <div className="heading my-4 text-center" >
                <h1 style={{marginTop: "90px"}}>NewsMonk - Top in {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>
                {loading && <Spinner />}
            </div>
            {articles !== undefined &&
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    endMessage={<p className="text-center" >That's all ... </p>}
                >
                    <div className="container my-4">
                        <div className="row">
                            {
                                !loading && articles.map((elem) => {
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

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 9,
}

export default News;