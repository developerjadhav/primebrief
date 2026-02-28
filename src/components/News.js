import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import FirstNews from './FirstNews';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        try {
            props.setProgress(10);
            let url = `/.netlify/functions/proxyApi?category=${props.category}`;
            setLoading(true);
            let data = await fetch(url);
            props.setProgress(50);

            if (!data.ok) {
                throw new Error('Failed to fetch news articles');
            }

            let parsedData = await data.json();
            props.setProgress(90);
            setArticles(parsedData.articles);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
        }
    };

    if (!loading && articles.length === 0) {
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `PrimeBrief - ${capitalizeFirstLetter(props.category)} News`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h1 className='text-center'>PrimeBrief - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            {/* for handling errors */}
            {!loading && articles.length === 0 && (
                <>
                    <h3 className="text-center text-danger">No articles found. Try again later.</h3>
                    <h3 className="text-center text-danger">You have reached the maximum number of requests per day. Please try again tomorrow.</h3>
                </>
            )}

            {/* FirstNews component starts */}
            {articles.length > 0 && <FirstNews title={articles[0].title} description={articles[0].description} imageUrl={articles[0].image} newsUrl={articles[0].url} date={articles[0].publishedAt} source={articles[0].source.name} />}

            {/* FirstNews component ends */}
            <div className='container'>
                <div className='row' style={{ marginBottom: "80px" }}>
                    {articles.slice(1).map((e) => {
                        return <div key={e.url} className='col-md-4'>
                            <Newsitem title={e.title} description={e.description} imageUrl={e.image} newsUrl={e.url} date={e.publishedAt} source={e.source.name} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}