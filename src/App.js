import React from "react";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import characters from "./characters.json";
import CharacterCards from "./components/CharacterCards"

const styles = {
    body: {
        backgroundColor: "#a9d5ef"
    }
};

class App extends React.Component {
    state = {
        characters: characters
    }

    render(){
        return (
            <div style={styles.body}>
                <Title score={0} topScore={0}>The Simpson's Click-Game</Title>
                <Instructions />

                {this.state.characters.map(char => {
                    return <CharacterCards
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    image={char.image}
                />


                })}
                
            </div>

        );
    };
};

export default App;