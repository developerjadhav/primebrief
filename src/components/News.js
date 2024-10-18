import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=1`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(90);

        setArticles(parsedData.articles);
        setLoading(false);
        setPage(2);
        setTotalResults(parsedData.totalResults);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `PrimeBrief - ${capitalizeFirstLetter(props.category)} News`;
        updateNews();
        // eslint-disable-next-line
    }, []);


    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }


    return (
        <>
            <h1 className='text-center'>PrimeBrief - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                style={{ marginBottom: "60px" }}   //******************** */
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                endMessage={<p>You're all caught up!</p>}  //</>***************
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((e) => {
                            return <div key={e.url} className='col-md-4'>
                                <Newsitem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import Newsitem from './Newsitem';
// import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from './Spinner';

// export default function News(props) {

//     const [articles, setArticles] = useState({abhi: "jadhav"});
//     const [page, setPage] = useState(1);
//     // const [loading, setLoading] = useState(true);
//     // const [hasMore, setHasMore] = useState(true);
//     const [parsedData, setParsedData] = useState([]);

//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     // const updateNews = async () => {
//     //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
//     //     let data = await fetch(url);
//     //     let parsedData = await data.json();

//     //     setArticles(parsedData.articles);
//     //     setLoading(false);
//     // }

//     useEffect(() => {
//         document.title = `PrimeBrief - ${capitalizeFirstLetter(props.category)} News`;
//         // updateNews();
//         fetchMoreData();
//         // eslint-disable-next-line
//     }, []);

//     const fetchMoreData = async () => {
//         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();

//         // setParsedData(await data.json());

//         setArticles(articles.concat(parsedData.articles));
//         // setArticles(parsedData.articles);
//         // setLoading(false);
//         setPage(page + 1);
//     };



//     return (
//         <>
//             <h1 className='text-center'>PrimeBrief - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//             <InfiniteScroll
//                 style={{ marginBottom: "60px" }}
//                 dataLength={articles.length}
//                 next={fetchMoreData}
//                 hasMore={articles.length < parsedData.totalResults}
//                 loader={<Spinner />}
//                 endMessage={<p>You're all caught up!</p>}
//             >
//                 <div className='container'>
//                     {/* <div className='row'>
//                         {articles.map((e) => {
//                             return <div key={e.url} className='col-md-4'>
//                                 <Newsitem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
//                             </div>
//                         })}
//                     </div> */}

//                     <div className='row'>

//                         {articles.map((e) => {
//                             return <div key={e.url} className='col-md-4'>
//                                 <Newsitem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
//                             </div>
//                         })}


//                     </div>

//                 </div>
//             </InfiniteScroll>
//         </>
//     )
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number
// }