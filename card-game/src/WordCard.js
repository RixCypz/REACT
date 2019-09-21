import _ from'lodash';
import React, { Component } from 'react'
import CharacterCard from './CharacterCard';


const prepareStateFromWord = (value) => {
    let word = value.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }


    
    activationHandler = (c) =>{
        console.log(`${c} has been activated.`)
        let guess = [... this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess:[], completed:true})
                console.log(`CONGRATULATIONS! YOU WIN`)
            }
            else{
                this.setState({guess:[], attempt:this.state.attempt+ 1})
                console.log(`PLEASE SELECT THE CARD AGAIN!`)
                
            }
        }
    }

    activate = () => {
        this.setState({guess:[], attempt:this.state.attempt + 1})
        this.state.completed = false
    }

    render() {
        return (
            <div>
                
                <h1 className= "h1">GUESS THE WORD</h1>
                { Array.from(this.state.chars).map((c, i) =>
                    <CharacterCard value={c} key={i} 
                    attempt = {this.state.attempt}
                    activationHandler = {this.activationHandler}/>) 
                }

                <p className= "result">{this.state.completed? "CONGRATULATIONS!":""}</p>

                <div>
                    <button className="btn" onClick = {this.activate}>
                        RESTART!
                    </button>
                </div>

            </div>
        );
    }
}