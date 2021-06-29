import React from 'react';

function DescriptionComponent(props){

    

    return (

            <div className="logos-description">
                <h1>{props.heading}</h1>
                <div>{props.description}</div>
                <div>{props.logos}</div>
            </div>

    );
}

export default DescriptionComponent;