import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import notFound from "./components/notFound";
import "./App.css";
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
        <Switch>
        <Route path="/products/:id" component={ProductDetails}/>
        <Route path="/products" render={(props)=><Products sortby="newest" {...props}/>}/>
        <Route path="/posts/:year?/:month?" component={Posts}/>
        <Route path="/admin" component={Dashboard}/>
        <Route path="/" exact component={Home}/>
        <Route path="/not-found"  component={notFound}/>
        <Redirect to="/not-found"/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
