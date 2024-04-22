import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            {props.options.length == 0 ? <p>Enter your first option!</p> : <p>There {props.options.length == 1 ? 'is' : 'are'} {props.options.length} {props.options.length == 1 ? 'option' : 'options'} available:</p>}
            {
            props.options.map(option => <Option key={option} option={option} handleRemoveOne={props.handleRemoveOne}/>)
            }
            <button onClick={props.handleRemoveAll}>Remove all options</button>
        </div>

    )
}

export default Options