import React from "react";

const styles = {
    instructions: {
        color: "white",
        fontSize: 25,
        fontFamily: "Permanent Marker, cursive",
        textAlign: "center",
        paddingBottom: 5
    }
};

function Instructions() {
    return (
        <div>
            <p style={styles.instructions}>Select a character once to earn a point, but don't select them twice or you'll have to start again!</p>
        </div>
    );
};

export default Instructions;

