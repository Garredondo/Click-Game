import React from "react";

const styles = {
    img: {
        margin: "auto",
        alignContent: "center",
        height: 150,
        width: 130,
        padding: 5
    },
    col: {
        float: "left",
        alignContent: "center"
    }
};


function CharacterCard(props) {
    return (
       
        <div>
            <div className="col-sm-3" style={styles.col}>
                <div className="img-container">
                    <button onClick={() => props.clickCount(props.id)}>
                        <img alt={props.name} src={props.image} style={styles.img} id={props.id}/>
                    </button>
                </div>
            </div>
        </div>

    
// {props.handleIncrement} id={props.id}
    );
}

export default CharacterCard;