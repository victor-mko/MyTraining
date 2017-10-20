import React, {Component} from 'react';
import Increment from './Incriment';
import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
  }
  addOne(){
    this.props.onAddOne();
  }
  removeOne(){
    this.props.onRemoveOne();
  }
  render () {
    return (
      <div> 
        <button onClick={this.addOne}>+1</button>
        <div>{this.props.testStore}</div>
        <button onClick={this.removeOne}>-1</button>
      </div>
    )
  }
}



export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddOne: () => {
      dispatch({ type: 'INCREMENT'})
    },
    onRemoveOne: () => {
      dispatch({ type: 'DECREMENT'})
    }
  })
)(App);