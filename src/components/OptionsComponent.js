import React from 'react';


function OptionsComponent(props){

    return (

            <div className="logos-options">
                {props.image}
                
                <h4> {props.logoType}</h4>
            </div>

    );
}

export default OptionsComponent;