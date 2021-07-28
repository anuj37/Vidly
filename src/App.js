// import React, { Component } from 'react';
// import Movies from "./components/movies";
// import Navbar from "./components/navbar";
// import Counters from "./components/counters";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "./App.css";

// class App extends Component {
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


//   render() { 
//     return ( 
//       // <main className="container">
//       //   <Movies />
//       // </main>
   
//         <React.Fragment>
//           <Navbar totalCounter = {this.state.counters.filter(c => c.value>0).length}/>
//           <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset = {this.handleReset}
//             onDelete = {this.handleDelete}
//             onIncrement = {this.handleIncrement}
//             onDecrement = {this.handleDecrement}
//           />
//           </main>
//         </React.Fragment>
//      );
//   }
// }
 
// export default App;