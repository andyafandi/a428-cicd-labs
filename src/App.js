import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Selamat Datang di Proyek Akhir Membangun CI/CD Pipeline</h1>
        </header>
        <section>
          <h2>ID Camp 2024 - Level Menengah</h2>
          <h3>by: Mohamad Irwam Afandi</h3>
        </section>
        <p className="App-intro">
          Ini adalah halaman utama proyek akhir untuk membangun pipeline CI/CD menggunakan teknologi terbaru. Di halaman ini, Anda dapat melihat pengenalan tentang proyek ini dan langkah-langkah untuk memulai.
        </p>
      </div>
    );
  }
}

export default App;
