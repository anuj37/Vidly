import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = {  
    //     counters: [
    //         {id:1, value:0},
    //         {id:2, value:0},
    //         {id:3, value:5},
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
        return ( 
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map( counter => 
                <Counter 
                key={counter.id} 
                onIncrement = {this.props.onIncrement}
                onDelete = {this.props.onDelete} 
                onDecrement = {this.props.onDecrement}
                counter = {counter}
                />
              
                )}
            </div>
         );
    }
}
 
export default Counters;