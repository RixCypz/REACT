import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
//import CharacterCard from './CharacterCard';

const word = "LOVE"

class App extends Component {
    render() {
        return (
            <div className="App" style={{backgroundColor: '#E5EAEA',height: '730px'}}>
                <WordCard value = {word}/>
            </div>
        );
    }
}
export default App;
