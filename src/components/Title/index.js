import React from "react";

const styles = {
    jumbotron: {
        background: "transparent",
        paddingBottom: 20,
        marginBottom: 0
    },
    title: {
        fontFamily: "Permanent Marker, cursive",
        textAlign: "center",
        color: "white",
        fontSize: 40
    },
    scoreDisplay: {
        color: "#ffd821",
        fontSize: 30,
        fontFamily: "Permanent Marker, cursive",
        textAlign: "left-justify",
        paddingBottom: 5
    }
};

function Title(props){
    return (
        <div>
            <div className="jumbotron" style={styles.jumbotron}>
                <h1 style={styles.title}>{props.children}</h1><br/>
            </div>
            <p style={styles.scoreDisplay}>Score: {props.score}</p>
            <p style={styles.scoreDisplay}>Top Score: {props.topScore}</p>
        </div>
    );
}

export default Title;