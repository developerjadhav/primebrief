import React from 'react';
import defaultImage from '../aseets/default-news-1.jpeg';

const FirstNews = ({title, description, imageUrl,
    newsUrl, date, source }) => {

    // return (
    //     <div className='container'>
    //         <div className="card text-bg-dark">
    //             <img src={imageUrl && imageUrl.trim() !== "" ? imageUrl : defaultImage} className="card-img" alt='news' />
    //                 <div className="card-img-overlay">
    //                     <h5 className="card-title">{title}</h5>
    //                     <p className="card-text">{description}</p>
    //                     <p className="card-text"><small className='text-muted'>Published on : {new Date(date).toGMTString()}</small></p>
    //                     <a href={newsUrl} target='_Blanck' className='btn btn-sm btn-dark'>Read More</a>
    //                 </div>
    //         </div>
    //     </div>
    // )



    return (
        <div className="container my-4">
            <div className="row align-items-center">
                {/* Left Side: Image */}
                <div className="col-md-6 position-relative">
                    <span className='position-absolute top-0 start-100 translate-middle badge bg-danger' id='source-badge'>{source}</span>
                    <img 
                        src={imageUrl && imageUrl.trim() !== "" ? imageUrl : defaultImage} 
                        className="img-fluid rounded" 
                        alt="news" 
                        style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
                    />
                </div>

                {/* Right Side: Text */}
                <div className="col-md-6">
                    <h4 className="fw-bold">
                        {title.length > 80 ? title.slice(0, 80) + "..." : title}
                    </h4>
                    <p>
                        {description && description.length > 150 ? description.slice(0, 150) + "..." : description}
                    </p>
                    <p className="text-muted">
                        <small>Published on: {new Date(date).toGMTString()}</small>
                    </p>
                    <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-dark btn-sm">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );


}

export default FirstNews