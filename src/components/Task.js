import React from 'react';

export default function Task(props) {

    return(
        <div>
            <p>{props.id}. {props.task}</p>
        </div>
    );
}