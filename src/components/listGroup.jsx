import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListGroup extends Component {
    
    renderListgroup = (genre,textProperty) =>{
        if(genre[textProperty]==="All Genre")
            return <Link to="/" className="anchor-genre">{genre[textProperty]}</Link>
        return genre[textProperty];
    }


    render() { 
        const {genres,
            onGenreChange,
            genreSelected,
            valueProperty,
            textProperty
            } = this.props;
        
        return ( 
        <ul className="list-group m-3" style={{width:150}}>
           {genres.map(genre => 
           <li 
              key={genre[valueProperty]} 
              className={ genre===genreSelected? "list-group-item active":"list-group-item"} 
              onClick={() => onGenreChange(genre)} > 
            {this.renderListgroup(genre,textProperty)} 
            </li>
            )}
        </ul>
         );
       }
}
// ListGroup.defaultProps = {
//     textProperty : "name",
//     valueProperty: "_id"
// };

export default ListGroup;