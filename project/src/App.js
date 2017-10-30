import React, {Component} from 'react';
import { connect } from "react-redux";
import { getTracks } from './actions/tracks';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputAddValue: '',
      inputFindValue: ''
    }
  }
  changeAddValue = (event) =>
    this.setState({ inputAddValue: event.target.value });

  changeFindValue = (event) =>
    this.setState({ inputFindValue: event.target.value });

  addTrack = () => {
    this.props.onAddTrack(this.state.inputAddValue);
    this.setState({ inputAddValue: "" });
  }

  findTrack= () => {
    this.props.onFindTrack(this.state.inputFindValue);
    this.setState({ inputFindValue: "" });
  }

  render () {
    return (
      <div> 
        <div>
          <input type="text" value={this.state.inputAddValue} onChange={this.changeAddValue}/>
          <button onClick={this.addTrack}>Add Track</button>
        </div>
        <br/>
        <br/>
        <div>
          <input type="text" value={this.state.inputFindValue} onChange={this.changeFindValue}/>
          <button onClick={this.findTrack}>Find Track</button>
        </div>
        <br/>
        <br/>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>

        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track.name}</li>)}
        </ul>
        
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payLoad = {
        id: Date.now().toString(),
        name
      }
      dispatch({ 
        type: 'ADD_TRACK', 
        payLoad
        })
    },
    onFindTrack: (name) => {

      dispatch({ 
        type: 'FIND_TRACK',
        payLoad: name
      })
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);