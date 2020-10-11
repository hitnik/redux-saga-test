import React, {useState } from "react";
import '../styles/App.css';
import {bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {increment, decrement, fetchDog} from '../store/actions';

const App = (props) =>{

    const [count , setCount] = useState(props.count)

    const handleIncrement = () => {
        props.increment();
        setCount(props.count+1);
    };
    const handleDecrement = () => {
        props.decrement();
        setCount(props.count-1);
    };
    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={handleIncrement}>Increment </button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={props.fetchDog()}>Show Dog</button>
                {this.props.loading 
                    ? <p>Loading...</p> 
                    : this.props.error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url}/></p>}
            </div>
    );
}

const mapStateToProps = state => {
    return {
      count: state.count
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {increment,decrement,
         fetchDog   
        }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);