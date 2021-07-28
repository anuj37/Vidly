import React, { Component } from 'react';
import {getMovies} from "../Starter Code/services/fakeMovieService";
import Pagination from './pagination';
import Paginate from '../utils/paginate';
import ListGroup from './listGroup';
import {getGenres} from "../Starter Code/services/fakeGenreService";
import _ , { filter } from "lodash";
import TableMovies from './TableMovies';
import { Redirect, Route } from 'react-router-dom';




class Movies extends Component {
    state = { 
        movies : [],
        pageSize: 4,
        currentPage: 1,
        genre:[],
        sortColumn:{
          path:"title",
          order:"asc"
        }
    }

    componentDidMount(){
      const genre =[{_id:" ",name:"All Genre"},...getGenres()];
      this.setState({movies : getMovies(), genre:genre})
    }

    handleDelete =(movie) => {
      const movies = this.state.movies.filter(m => m._id!==movie._id);
      this.setState({movies:movies});
    } 

    handlePageChange = (page) =>{
      this.setState({currentPage:page});
    }
    
    handleLike=(movie)=>{
      
      const movies = [...this.state.movies];
      const index = movies.indexOf(movie);
      movies[index]={...movie};
      movies[index].liked=!movies[index].liked;
      this.setState({movies});
    }

    handleGenreChange= genre =>{
     this.setState({genreSelected: genre,currentPage:1});
    }

    handleSort = sortColumn => {
      this.setState({sortColumn});
    }

    render() { 
       const {length : count} = this.state.movies;
       const {pageSize, currentPage, movies:allMovies, genre, genreSelected, sortColumn} = this.state;
       
       
       if (count===0) return <p>There are no movies in database.</p>
      
      const filteredMovie = genreSelected&&genreSelected._id
                            ?allMovies.filter(m=>m.genre._id===genreSelected._id)
                            :allMovies;
      
      const sortedMovie = _.orderBy(filteredMovie,[sortColumn.path],[sortColumn.order]);

      const movies=Paginate(sortedMovie,currentPage,pageSize,genreSelected);
          
       
       return ( 
        <div>
          
          <div className="container">
            <div className=" row">
              <div className="col-3">
                <ListGroup
                genres = {genre}
                onGenreChange = {this.handleGenreChange}
                genreSelected={genreSelected}
                textProperty ="name"
                valueProperty= "_id"
                />
              </div>
              <div className="col">
                <p>Showing {filteredMovie.length} movies in the database.</p>
                  <TableMovies
                      movies={movies}
                      sortColumn={sortColumn}
                      onlike={this.handleLike}
                      onDelete={this.handleDelete}
                      onSort={this.handleSort}
                  />
                  <Pagination
                      itemsCount ={filteredMovie.length}
                      pageSize={pageSize}
                      currentPage = {currentPage}
                      onPageChange = {this.handlePageChange}
                    />
                  </div>
              </div>
          </div>
         
        </div>
       );
    }

   
}
 
export default Movies;