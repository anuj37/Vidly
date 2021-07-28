import React, { Component } from 'react';
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai";

class Like extends Component {
    
    render() { 
        
        const { liked,movie,onLikeChange}=this.props;
        
        return ( 
        <a onClick={()=>onLikeChange(movie)}>
            {this.getLikedIcon(liked)}
        </a>
         );
    }

    getLikedIcon(liked){
        return liked===true?<AiFillHeart/>:<AiOutlineHeart/>;
    }
}
 
export default Like;