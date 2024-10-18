import React from 'react';
import defaultImage from '../aseets/default-news-1.jpeg';

export default function Newsitem(props) {
    let {title, description, imageUrl,
        newsUrl, author, date, source} = props;
  return (
    <div className='my-3'>
        <div className='card mx-4'>
            <img src={imageUrl ? imageUrl : defaultImage} className='card-img-top' alt='...'/>
            {/* <img src='../aseets/spinner.gif' className='card-img-top' alt='...'/> */}
            <span className='position-absolute top-0 start-100 translate-middle badge bg-danger'>{source}</span>
            <div className='card-body'>
                <h5 className='card-title' style={{minHeight: "48px"}}>{title != null && title.length > 45 ? title.slice(0,45) + '...' : title}</h5>
                <p className='card-text' style={{minHeight: "72px"}}>{description != null && description.length > 125 ? description.slice(0,125) + '...' : description}</p>
                <p className='card-text' style={{minHeight: "48px"}}><small className='text-muted'>By {author ? author : 'unknown'} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_Blanck' className='btn btn-sm btn-dark'>Read More</a>
            </div>
        </div>
    </div>
  )
}
