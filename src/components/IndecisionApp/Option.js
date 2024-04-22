import React from 'react' //need to import as this file uses react

const Option = (props) => {
    return  (
        <div>
            <p>{props.option}
            <button id={props.option}
            onClick={(e) => {e.preventDefault(); props.handleRemoveOne(props.option)}}
            >Remove option
            </button>
            </p>
        </div>
    )
}

export default Option