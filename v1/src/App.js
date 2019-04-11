import React, { Component } from 'react';
import Header from './components/Header';
import MainImage from './components/MainImage';
import FeaturedWork from './components/FeaturedWork';


class App extends Component {
    render() {
        return (
            <main className="container">
                <Header />
                <MainImage />
                <FeaturedWork />
            </main>
        );
    }
}

export default App;
