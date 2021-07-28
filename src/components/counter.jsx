import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count : this.props.counter.value
    //     // tags : []
    // };

    // constructor(props){

    //     super(props);
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // }


    render() {
        
        return (
            <React.Fragment>
                <div>
                    {this.props.children}
                    <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
                    {/* <ul>
                        {this.state.tags.length ===0 && "no Tags"}
                        {this.renderTags()}
                    </ul> */}
                </div>
            </React.Fragment>
             );
    }

    // handleIncrement = () =>{
    //    this.setState({count: this.state.count+1});        
    // }

    // renderTags(){
    //     if(this.state.tags.length ===0) return <p>There are no Tags</p>;
    //     return this.state.tags.map( tag => <li key={tag}>{tag}</li>)
    // }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes+= (this.props.counter.value===0)?"warning":"primary"; 
        return classes;
    }

    formatCount(){
        const { value} =this.props.counter;
        return value === 0 ? "zero" : value;
    }
}
 
export default Counter;