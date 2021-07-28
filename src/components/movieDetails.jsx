import React from 'react';

const MovieDetails = ({match,history}) => {
    return ( <React.Fragment>
                <h1>Movie - {match.params.id}</h1>
                <button className="btn btn-dark" onClick={()=>history.push("/")}>Save</button>
            </React.Fragment> );
}
 
export default MovieDetails;