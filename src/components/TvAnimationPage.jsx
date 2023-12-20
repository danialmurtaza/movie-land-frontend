import React from "react";
import video from './video/video-tv-0819.m4v';

const TvAnimationPage = () => {
    
    return(
        <>

         <hr className="divider" />

        <div className="tv-page">

            <div className="tv-page-left-col">

                <h2 className="tv-main-title">Enjoy on your TV</h2>

                 <p className="tv-main-sub-title">Step into a world of cinematic wonder. Explore, discover, 
                and experience the magic of movies like never before.</p>
                
            </div>

            <div className="tv-page-right-col">

                <img className="tv-img" src="./images/tv.png" alt="" />

                <video className="tv-video" src={video} typeof="video/mp4" autoPlay muted loop ></video>

            </div>
        </div>

        </>
    );
};

export default TvAnimationPage;