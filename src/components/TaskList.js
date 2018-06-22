import React from 'react';
import Task from './Task';

export default function TaskList(props) {

    const tasks = props.tasks.map(task => {
        return <Task key={task.id} {...task} />
    })

    return(
        <div>
            {tasks}
        </div>
    );

}