import React from 'react' //need to import as this file uses react

export default class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault(); //for forms
        const option = e.target.elements.option.value
        const error = this.props.handleAddOption(option); //this is the parent handleAddOption method. it passes user input 'option' value up to the parent where the global options array actually exists
        
        this.setState(() =>  ({error}) )
        if (!error) {
            e.target.reset();
        }
    }
    render() {
        return (
            <div>
                <p>Customise your own list:</p>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}