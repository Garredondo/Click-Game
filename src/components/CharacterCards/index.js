import React from "react";

const styles = {
    img: {
        margin: "auto",
        alignContent: "center",
        height: 230,
        width: 175
    },
    col: {
        float: "left",
        alignContent: "center"
    }
};


function CharacterCard(props) {
    return (
        <div className="col-sm-3" style={styles.col}>
            <div className="img-container">
                <img alt={props.name} src={props.image} style={styles.img}/>
            </div>
        </div>
    );
}

export default CharacterCard;