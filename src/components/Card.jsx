import React from "react";

const Card = ({userName, book}) => {
    return (
        <div>
        Hola {userName}!
        Sabemos que tu libro favorito es: {book}
        </div>
    )
    
};


export default Card;