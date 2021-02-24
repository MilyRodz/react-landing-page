import React from 'react';

const Card = ({title, content, url, buttonName}) => {
    return (
        <div className="col-sm-3">
        <div className="card" style={{}}>
            <img className="card-img-top" src={url} alt="Card cap"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="/#" className="btn btn-primary">{buttonName}</a>
            </div>
        </div>
        </div>
        );
}

export default Card;