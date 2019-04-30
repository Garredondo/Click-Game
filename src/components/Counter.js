import React from "react";
import Title from "./Title";
import Instructions from "./Instructions";
import characters from "../characters.json";
import CharacterCards from "./CharacterCards"

const styles = {
    body: {
        backgroundColor: "#a9d5ef"
    }
};

class App extends React.Component {
    state = {
        characters: characters,
        score: 0,
        topScore: 0,
    }

    handleIncrement = () => {
        this.setState({ topScore: this.state.topScore + 1});
        
    };

    gameOver = () => {
        if(this.state.score > this.state.topScore){
            this.setState({topScore: this.state.score}, function(){
                console.log(this.state.topScore);
            });
        }
        this.state.characters.forEach(character => {
            character.count = 0;
        });
        alert("Game Over");
        this.setState({score: 0});
        return true;
    }

    clickCount = id => {
        this.state.characters.find((o, i) => {
            if(o.id === id){
                if(characters[i].count === 0){
                    characters[i].count = characters[i].count + 1;
                    this.setState({score : this.state.score + 1}, function(){
                        console.log(this.state.score);
                    });
                    this.state.characters.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.gameOver();
                }
            }
        });
    }
   

    render(){
        return (
            <div style={styles.body}>
                <Title score={this.state.score} topScore={this.state.topScore}>The Simpson's Click-Game</Title>
                <Instructions />
                
                {this.state.characters.map(char => {
                    return <CharacterCards
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    image={char.image}
                    clickCount={this.clickCount}
                    handleIncrement={this.handleIncrement}
                />

                })};
                
            </div>

        );
    };
};

export default App;