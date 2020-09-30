import React from 'react';



function Content(props){
    return (
        <div>
            <h3>{props.content.header}</h3>
            <p>{props.content.content}</p>
        </div>
    );
}

export default Content;