import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOption} // disabled when length =0
            >
            What should I do?
            </button>
        </div>
    );
}

export default Action