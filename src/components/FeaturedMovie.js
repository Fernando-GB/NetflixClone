import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    console.log(item);
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info"></div>
                         <div className="featured--points">{item.vote_average} points </div>
                         <div className="featured--year">2099</div>
                         <div className="featured--season">{item.number_of_season}</div>
                </div>
            </div>
        </section>
    );
}