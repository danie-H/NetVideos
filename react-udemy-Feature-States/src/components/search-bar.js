import React, {Component} from 'react'

// const SearchBar = function (){
//     return <input/>
// }

/*on veut que l'input puisse savoir ce kil va récupérer
donc on va créer une classe à la place*/
class SearchBar extends Component{ //React.Component
    constructor(props){
        super(props);
        this.state = {searchText:"", placeHolder:"Tapez votre film ..."}
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-control input-lg" onChange={this.handleChange} placeholder={this.state.placeHolder}/>
                    <p>{this.state.searchText}</p> 
                </div>   
            </div>
        )
     } 

    handleChange(event){ //on récupère l'évènement renvoyé par le "onChange"
        // console.log('------------');
        // console.log('une saisie',event.target.value); //pour accéderà la valeur de ce qui est tapé dans l'input
        // console.log('------------');

        this.setState({searchText:event.target.value});//"setState" appelle automatiquement le "render" dès qu'il y'a une modification de valeur
    }
}
export default SearchBar; 