import React from 'react'
import CS from './commentstripper.gif';
import IdInput from './components/IdInput/IdInput'
import './App.css';

const initialState = {
  videoId: '',
}
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onInputChange = (event) => {
    this.setState({ videoId: event.target.value })
  }

  // onButtonSubmit = () => {
  //   fetch('http://localhost:3000/videoId', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       videoId: this.state.videoId
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response) {
  //         fetch('http://localhost:3000/videoId/' + this.state.videoId, {
  //           method: 'put',
  //           headers: { 'Content-Type': 'application/json' },
  //         })
  //       }
  //     })
  // }

  onButtonSubmit = () => {
    fetch('http://localhost:3000/videoId/' + this.state.videoId, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        videoId: this.state.videoId
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <img src={CS} className="logo" alt="Comment Stripper" />
        <IdInput onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}

export default App;
