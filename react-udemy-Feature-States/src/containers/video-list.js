import React from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {
 
    const {movieList} = props;

    // console.log('--------------')
    // console.log('', movieList);
    // console.log('--------------');
    // const movieList = ["film1", "film2", "film3", "film4", "film5"]

    return (

        <div>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback}/>
                        //"callback" prépare video-list(le parent) à recevoir un props
                    })
                }
            </ul>
        </div>
    );

    function receiveCallback(movie){
        props.callback(movie);
    }
}

export default VideoList;