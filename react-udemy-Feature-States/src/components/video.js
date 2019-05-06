import React from 'react'
const BASE_URL="https://www.youtube.com/embed/";

const Video = ({videoId}) => {
    return (
        //Bootstrap: comment incruster une vidéo avec bootstrap
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className src={`${BASE_URL}${videoId}`} />
        </div>
    )
}

export default Video;