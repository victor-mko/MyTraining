import React, {Component} from 'react';
import Increment from './Incriment';
import { connect } from "react-redux";

class App extends Component {
  
  render () {
    console.log(this.props.testStore);
    return (
      <div> 
        <Increment />
        <div>{this.props.testStore}</div>
      </div>
    )
  }
}



export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);