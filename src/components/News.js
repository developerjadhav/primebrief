import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://gnews.io/api/v4/top-headlines?country=in&category=${props.category}&apikey=${props.apiKey}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(90);
        setArticles(parsedData.articles);
        setLoading(false);
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
            <div className='container'>
                <div className='row' style={{marginBottom: "80px"}}>
                    {articles.map((e) => {
                        return <div key={e.url} className='col-md-4'>
                            <Newsitem title={e.title} description={e.description} imageUrl={e.image} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
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