import React, { Component } from 'react';
import Like from './like';
import _ , { filter } from "lodash";
import TableHeader from './tableHeader';
import TableBody from './tablebody';
import { Link } from 'react-router-dom';


class TableMovies extends Component {
   
  columns = [
    {key:"sno", label:"#"},
    {path:"title", label:"Title", content : movie => (
      <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    )},
    {path:"genre.name", label:"Genre"},
    {path:"dailyRentalRate", label:"Daily Rate"},
    {path:"numberInStock", label:"Stocks"},
    {key:"Like", content : movie => (
      <Like liked={movie.liked} movie={movie} onLikeChange={this.props.onlike}/>
    )},
    {key:"Delete", content : movie => (
      <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
    )}
  ];

  render() { 
        const { movies,sortColumn, onSort} = this.props;
        
        return ( 
          <table className="table">
              <TableHeader 
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
              />
              <TableBody 
                columns={this.columns}
                data={movies}
              />
              {/* <thead>
                <tr>
                  <th scope="col">#</th>
                  <th onClick={()=>this.raisesort("title")}scope="col">Title</th>
                  <th onClick={()=>this.raisesort("genre")} scope="col">Genre</th>
                  <th onClick={()=>this.raisesort("dailyRentalRate")} scope="col">Daily Rate</th>
                  <th onClick={()=>this.raisesort("numberInStock")} scope="col">Stocks</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead> */}
              {/* <tbody>
                  {movies.map(
                      movie => (
                      <tr key = {movie._id}>
                          <td>{this.getSNo(movies.length)}</td>
                          <td>{movie.title}</td>
                          <td>{movie.genre.name}</td>
                          <td>{movie.dailyRentalRate}</td>
                          <td>{movie.numberInStock}</td>
                          <td><Like liked={movie.liked} movie={movie} onLikeChange={this.props.onlike}/></td>
                          <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                      )
                  )}
              </tbody> */}
              </table>
         );
    }
    
    // getSNo(movielength){
    // const sno = _.range(1,movielength+1);
    // return sno;
    // }
}
 
export default TableMovies;