import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=a74a5ad778c107b24e7df4c4f7f9d32f";

//creation d'un composant
class App extends Component {

    constructor(props){
        super(props)
        this.state = {movieList:{},currentMovie:{}} //initialisation du state
    }

    componentWillMount(){ //au moment où le composant va etre chargé
        this.initMovies();
        //console.log('--------');
    }

    initMovies() {
        //on fait la methode catAjax
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){

            this.setState({movieList:response.data.results.slice(1, 6), currentMovie:response.data.results[0]}, function(){
                this.applyVideoToCurrentMovie();
            });//on ne peut pas appeler le "this.applyVideoToCurrentMovie();" car on doit attendre la mise à jour complete du setState

            //this.setState({currentMovie:response.data.results[0]});//c'est lui qui est affiché dans la video youtube au centre
            // console.log('-',this.state.movieList)
            // console.log('', this.state.currentMovie);
            // console.log('-', );
        }.bind(this));
    }

    applyVideoToCurrentMovie(){
        //${API_END_POINT}movie/[mocieId]?append_to_response=videos&include_adult=false&${APT_KEY}
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
            
            // console.log('---')
            // console.log('', response)
            // console.log('-----')

            const youtubekey = response.data.videos.results[0].key;
            //attribut video youtube
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubekey;
            this.setState({currentMovie: newCurrentMovieState});//MAJ de currentMovie
            
            // console.log('---')
            // console.log('', newCurrentMovieState)
            // console.log('-----')
        }.bind(this));
    }

    receiveCallback(movie) {
        this.setState({currentMovie:movie},function(){
            this.applyVideoToCurrentMovie();
        })
    }


    render() {
        
        const renderVideoList = () => {
            if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList} callback={this.receiveCallback.bind(this)}/> 
            }
        }
            return (
                <div>

                    <div className="search_bar">
                        <SearchBar/>
                    </div>
                    
                    <div className="row">

                        <div className="col-md-8">
                            <Video videoId={this.state.currentMovie.videoId}/>
                            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                        </div>

                        <div className="col-md-4">
                            {renderVideoList()}
                        </div>

                    </div>
                    {/* <VideoList movieList={this.state.movieList/> */}
                    
                </div>
            )
        }

}

export default App;