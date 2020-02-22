import React from 'react';
import Card from './Card/Card'

const cards = (props) => {
    console.log(props);

    const cards = props.data.map(card => {
        return (
            <Card 
                key={card['_id']}
                titulo={card.title}
                contenido={card.content}
                responsable={card.responsible}/>
        )
    });
    return(
        <div>
            {cards}
        </div>
        
        
    )
}

export default cards;