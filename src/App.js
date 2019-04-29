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

function App() {
    return (
        <div style={styles.body}>
            <Title score={0} topScore={0}>The Simpson's Click-Game</Title>
            <Instructions />
            <CharacterCards
                name={characters[0].name}
                image={characters[0].image}
            />

            <CharacterCards
                name={characters[1].name}
                image={characters[1].image}
            />

            <CharacterCards
                name={characters[2].name}
                image={characters[2].image}
            />

            <CharacterCards
                name={characters[3].name}
                image={characters[3].image}
            />  
        </div>

    );
};

export default App;