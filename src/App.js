import React, { Component } from 'react';
import './App.css'; // Import the CSS file for styling

// function App() {
//   return (
//     <div className="App">
      // <header className="App-header">
      //   <h1 className="blinking-text">Welcome to React</h1>
      //   <h3> Halaman ini sudah dimodifikasi sedikit, selamat menikmati!</h3>
      // </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="blinking-text">Welcome to React</h1>
          <h3> Halaman ini sudah dimodifikasi sedikit, selamat menikmati!</h3>
        </header>

      </div>
    );
  }
}

export default App;