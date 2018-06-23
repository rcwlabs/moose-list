import React from 'react';

export default function NewTask(props) {

    function onChange(e) {
        props.handleInputChange(e.target.value);
    };

    function onClick(e) {
        e.preventDefault();
        if (props.inputValue) {
            props.handleAddTask();
        } else {
            alert('enter an item');
        }
    }

    return(

        <div>
            <form>
                <input 
                    onChange={(e) => {onChange(e)}}
                    type='text' 
                    placeholder="add new task..." 
                    value={props.inputValue}
                />
                <button onClick={(e) => {onClick(e)}} type="submit">Submit</button>
            </form>
        </div>
    );

};