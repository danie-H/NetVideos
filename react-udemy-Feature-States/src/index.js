
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/app'

// const API_END_POINT = "https://api.themoviedb.org/3/"
// const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
//const API_KEY = "api_key=a74a5ad778c107b24e7df4c4f7f9d32f";



//fonction d'affichage du composant
React.render(<App/>, document.querySelector('.container')); /*"React.render(App);" ne peut pas marcher car il faut appeller une instance de la classe
                         dans le render donc utiliser "React.render(<App></App>);" ou "React.render(<App/>);"
                         car il y a rien a mettre dans la balise App*/


//THE MOVIE DATABASE

