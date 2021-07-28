import React, { Component } from 'react';
import Movies from "./components/movies";
// // import Navbar from "./components/navbar";
// // import Counters from "./components/counters";
// // import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from './components/navbar';
import NotFound from './components/notfound';
import MovieDetails from './components/movieDetails';


class App extends Component {
//   state = {  
//     counters: [
//         {id:1, value:0},
//         {id:2, value:0},
//         {id:3, value:0},
//         {id:4, value:0},
//         {id:5, value:0},
//     ]
// }

// handleIncrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     // counters[index]={...counter};
//     counters[index].value++;
//     this.setState({counters});
// } 

// handleDecrement = counter =>{
//   const counters = [...this.state.counters];
//   const index = counters.indexOf(counter);
//   // counters[index]={...counter};
  
//   if(counters[index].value >0){
//     counters[index].value--;
//     this.setState({counters});
  
//   }
  
// }

// handleDelete =(counterID)=>{
//     const counters = this.state.counters.filter( c=>c.id!==counterID);
//     this.setState({counters : counters});
//     console.log(counterID);
// }

// handleReset =()=>{
//    const counters = this.state.counters.map(
//         c=> {c.value=0;
//             return c;
//         }
//     );
//     this.setState({counters});
// }


  render() { 
    console.log("app created");
    return ( 
      <React.Fragment>
        <NavBar/>
        <main className="container">
        <Switch>
            <Route path="/movies/:id" component={MovieDetails}/>
            <Route path="/movies" component={Movies}/>           
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Redirect from="/" exact to="/movies"/>
            {/* <Route path="/" exact component={Movies}/>  */}
            <Route path="/not-found" component={NotFound}/>
            <Redirect to="/not-found" />
        </Switch>
      </main>
      </React.Fragment>
        
   
        // <React.Fragment>
        //   <Navbar totalCounter = {this.state.counters.filter(c => c.value>0).length}/>
        //   <main className="container">
        //   <Counters
        //     counters={this.state.counters}
        //     onReset = {this.handleReset}
        //     onDelete = {this.handleDelete}
        //     onIncrement = {this.handleIncrement}
        //     onDecrement = {this.handleDecrement}
        //   />
        //   </main>
        // </React.Fragment>
     );
  }
}
 
export default App;