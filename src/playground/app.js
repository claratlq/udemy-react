class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.state = {
            options: []
            //options: props.options  //references defaultProps
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options'); //json (string) format
            const options = JSON.parse(json)
            if (options) {
                this.setState( () => ({options})) //wow, the () around {options} MATTERS. it implicitly returns an objcet by wrapping it in ()
            }
        } catch (e) {
            //do nth at all
        }
    }

    componentDidUpdate(prevProps, prevState) {  //after state or prop updates
        console.log('prevState: ' + prevState.options)
        console.log('curr: ' + this.state.options)
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleRemoveOne(optionToRemove) {   
        //this.state.options.splice(this.state.options.indexOf(option), 1)       
        this.setState( (prevState) => ({ 
            options: prevState.options.filter( (option) => option != optionToRemove )
        }));
    }

    handleRemoveAll() {                             //put this here as we need to reference the global options array
        this.setState( () => ({options: []}))
    }

    handlePick() {
        const range = this.state.options.length;
        const randomNum = Math.floor(Math.random() * range);
        console.log(range, randomNum);
        const chosen = this.state.options[randomNum];
        alert(chosen);
    }

    handleAddOption(option) {
        if(!option.trim()) {
            return 'Please enter a valid option.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        } else {
            this.setState( (prevState) => ({options: prevState.options.concat([option]) }))
            //options: prevState.options.push(option)
        }
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Options                                            //these are like the 'bridge' between parent (this class) and child (options class)
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOne={this.handleRemoveOne}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick} // 'hasOption', 'handlePick' are props --> the 'bridge' between a parent and its child   
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }

//this is a react component called Header
const Header = (props) => {
    return ( // JSX expression
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

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
// class Action extends React.Component {
//     // why don't we want handlePick() here?? We need it to live above as it is a global value that multiple classes need access to

//     // handlePick() {
//     //     alert('handlePick');
//     //     //do smth to add
//     // }
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOption}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

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

// class Option extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleRemoveOne = this.handleRemoveOne.bind(this)
//     }

//     handleRemoveOne(e) {
//         e.preventDefault();
//         const option = e.target.id
//         this.props.handleRemoveOne(option)
//     }

//     render() {
//         return  (
//             <div>
//                 <p>{this.props.option}  <button id={this.props.option} onClick={this.handleRemoveOne}>Remove option</button></p>
//             </div>
//         )
//     }
// }

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

class AddOption extends React.Component {
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));